@echo off
chcp 65001 > nul
title WordPDFTransfer — Local Server

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║       WordPDFTransfer  ⚡  v1.0.0        ║
echo  ║   PDF to Word  ·  Word to PDF  —  Free   ║
echo  ╚══════════════════════════════════════════╝
echo.

:: Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] Python chua duoc cai. Tai tai https://python.org
    pause
    exit /b 1
)

:: Install dependencies if not already installed
echo  [1/3] Kiem tra va cai thu vien Python...
pip install -r requirements.txt -q --disable-pip-version-check
if errorlevel 1 (
    echo  [ERROR] Cai thu vien that bai! Chay thu: pip install -r requirements.txt
    pause
    exit /b 1
)

echo  [2/3] Thu vien da san sang.
echo  [3/3] Khoi dong server...
echo.
echo  ──────────────────────────────────────────
echo   Truy cap: http://localhost:8000
echo   Nhan Ctrl+C de dung server
echo  ──────────────────────────────────────────
echo.

:: Start the FastAPI server from the backend directory
cd backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload

pause
