# WordPDFTransfer ⚡

> **Chuyển đổi PDF ↔ Word miễn phí, chạy hoàn toàn local — không cloud, không trả phí.**

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green.svg)](https://fastapi.tiangolo.com)

---

## ✨ Tính năng

| Tính năng | Mô tả |
|-----------|-------|
| 📄 **PDF → Word** | Chuyển `.pdf` sang `.docx` có thể chỉnh sửa, giữ nguyên bảng và hình ảnh |
| 📝 **Word → PDF** | Chuyển `.docx` / `.doc` sang `.pdf` chất lượng cao qua Microsoft Word |
| 🔒 **Hoàn toàn local** | File không rời khỏi máy bạn |
| 💯 **Miễn phí vĩnh viễn** | Open source, không giới hạn |
| 🎨 **Giao diện đẹp** | Dark mode, drag & drop, responsive |

---

## 🚀 Cài đặt & Chạy

### Yêu cầu

- **Python 3.10+** — [tải tại đây](https://python.org/downloads/)
- **Microsoft Word** (khuyến nghị) hoặc [LibreOffice](https://libreoffice.org) — cho chức năng Word→PDF

### Chạy nhanh (Windows)

```
Double-click vào file run.bat
```

Trình duyệt mở tại: **http://localhost:8000**

### Chạy thủ công

```bash
# 1. Cài thư viện
pip install -r requirements.txt

# 2. Khởi động server
cd backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 🗂️ Cấu trúc project

```
WordPDFTransfer/
├── backend/
│   ├── main.py          # FastAPI server + API routes
│   └── converter.py     # Logic chuyển đổi PDF/Word
├── frontend/
│   ├── index.html       # Giao diện chính
│   ├── style.css        # Dark mode UI
│   └── app.js           # Drag & drop + API calls
├── uploads/             # File tạm (tự xóa sau khi xử lý)
├── outputs/             # File kết quả (tự xóa sau khi download)
├── requirements.txt     # Thư viện Python
├── run.bat              # Script chạy 1-click (Windows)
└── README.md
```

---

## 🛠️ Công nghệ sử dụng

| Layer | Công nghệ |
|-------|-----------|
| Backend API | [FastAPI](https://fastapi.tiangolo.com) + [Uvicorn](https://www.uvicorn.org) |
| PDF → DOCX | [pdf2docx](https://github.com/dothinking/pdf2docx) |
| DOCX → PDF | [docx2pdf](https://github.com/AlJohri/docx2pdf) + Microsoft Word |
| Frontend | HTML5 + CSS3 (Vanilla) + JavaScript (ES2022) |

---

## ⚠️ Lưu ý

- **PDF dạng scan (ảnh chụp)**: `pdf2docx` hoạt động tốt nhất với PDF văn bản. PDF scan cần OCR (tính năng Phase 2).
- **Font chữ**: Chất lượng tốt nhất khi dùng Microsoft Word thay vì LibreOffice.
- **File tạm**: Tự động xóa sau mỗi lần chuyển đổi để bảo mật.

---

## 📄 License

MIT © WordPDFTransfer Contributors
