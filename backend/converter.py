"""
converter.py — Core conversion logic
PDF ↔ Word using pdf2docx and docx2pdf
"""

import traceback
from pathlib import Path


def pdf_to_docx(input_path: str, output_path: str) -> tuple[bool, str]:
    """
    Convert a PDF file to DOCX format.
    Uses pdf2docx which preserves layout, tables, and images.

    Returns:
        (True, "") on success
        (False, error_message) on failure
    """
    try:
        from pdf2docx import Converter as PDFConverter

        cv = PDFConverter(input_path)
        cv.convert(output_path, start=0, end=None)
        cv.close()
        return True, ""
    except Exception:
        return False, traceback.format_exc()


def docx_to_pdf(input_path: str, output_path: str) -> tuple[bool, str]:
    """
    Convert a DOCX/DOC file to PDF format.
    Uses docx2pdf which leverages Microsoft Word (if installed) for best quality.
    Falls back to LibreOffice on systems without Word.

    Returns:
        (True, "") on success
        (False, error_message) on failure
    """
    try:
        from docx2pdf import convert

        convert(input_path, output_path)

        # Verify output was created
        if not Path(output_path).exists():
            return False, "Output PDF was not created. Make sure Microsoft Word or LibreOffice is installed."

        return True, ""
    except Exception:
        return False, traceback.format_exc()
