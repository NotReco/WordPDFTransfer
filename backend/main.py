"""
main.py — FastAPI server for WordPDFTransfer
Serves both the REST API and the static frontend.
"""

import os
import uuid
from pathlib import Path

from fastapi import BackgroundTasks, FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

# ── Paths ────────────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).parent.parent
UPLOAD_DIR = BASE_DIR / "uploads"
OUTPUT_DIR = BASE_DIR / "outputs"
FRONTEND_DIR = BASE_DIR / "frontend"

UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)

# ── App ───────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="WordPDFTransfer",
    description="Free & open-source PDF ↔ Word converter running locally.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Helpers ───────────────────────────────────────────────────────────────────
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50 MB


def _cleanup(path: str) -> None:
    """Remove a file silently (used as a background task after download)."""
    try:
        os.remove(path)
    except OSError:
        pass


async def _save_upload(file: UploadFile, dest: Path) -> None:
    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="File quá lớn (giới hạn 50 MB)")
    dest.write_bytes(content)


# ── API Routes ────────────────────────────────────────────────────────────────
@app.get("/api/health")
async def health():
    """Health check endpoint."""
    return {"status": "ok", "message": "WordPDFTransfer is running 🚀"}


@app.post("/api/convert/pdf-to-word")
async def convert_pdf_to_word(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
):
    """Convert an uploaded PDF file to DOCX format."""
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Chỉ chấp nhận file .pdf")

    file_id = uuid.uuid4().hex
    input_path = UPLOAD_DIR / f"{file_id}.pdf"
    output_path = OUTPUT_DIR / f"{file_id}.docx"

    try:
        await _save_upload(file, input_path)

        # Run conversion (import here to avoid slow startup)
        from converter import pdf_to_docx

        success, error = pdf_to_docx(str(input_path), str(output_path))
    finally:
        _cleanup(str(input_path))

    if not success:
        _cleanup(str(output_path))
        raise HTTPException(status_code=500, detail=f"Chuyển đổi thất bại: {error}")

    stem = Path(file.filename).stem
    background_tasks.add_task(_cleanup, str(output_path))

    return FileResponse(
        path=str(output_path),
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        filename=f"{stem}.docx",
    )


@app.post("/api/convert/word-to-pdf")
async def convert_word_to_pdf(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(...),
):
    """Convert an uploaded DOCX/DOC file to PDF format."""
    fname = file.filename.lower()
    if not (fname.endswith(".docx") or fname.endswith(".doc")):
        raise HTTPException(status_code=400, detail="Chỉ chấp nhận file .docx hoặc .doc")

    file_id = uuid.uuid4().hex
    ext = Path(file.filename).suffix
    input_path = UPLOAD_DIR / f"{file_id}{ext}"
    output_path = OUTPUT_DIR / f"{file_id}.pdf"

    try:
        await _save_upload(file, input_path)

        from converter import docx_to_pdf

        success, error = docx_to_pdf(str(input_path), str(output_path))
    finally:
        _cleanup(str(input_path))

    if not success:
        _cleanup(str(output_path))
        raise HTTPException(status_code=500, detail=f"Chuyển đổi thất bại: {error}")

    stem = Path(file.filename).stem
    background_tasks.add_task(_cleanup, str(output_path))

    return FileResponse(
        path=str(output_path),
        media_type="application/pdf",
        filename=f"{stem}.pdf",
    )


# ── Serve Frontend ────────────────────────────────────────────────────────────
# Must be LAST so API routes take priority
app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")
