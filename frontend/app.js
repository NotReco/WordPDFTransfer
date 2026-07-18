/**
 * app.js — WordPDFTransfer Frontend Logic
 * Handles drag & drop, file upload, progress simulation, and download.
 */

// ── Config ────────────────────────────────────────────────────────────────────
const API_BASE = '';   // Empty = same origin (server serves both API and frontend)

// ── Toast ─────────────────────────────────────────────────────────────────────
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(message, type = 'info') {
  toast.textContent = message;
  toast.className = `toast show toast-${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ── Drop Zone Setup ────────────────────────────────────────────────────────────
function setupDropZone(config) {
  const { dzId, inputId, progressId, fillId, labelId, resultId, dlId, resetId } = config;

  const dz        = document.getElementById(dzId);
  const input     = document.getElementById(inputId);
  const progressEl = document.getElementById(progressId);
  const fillEl    = document.getElementById(fillId);
  const labelEl   = document.getElementById(labelId);
  const resultEl  = document.getElementById(resultId);
  const dlEl      = document.getElementById(dlId);
  const resetEl   = document.getElementById(resetId);

  const endpoint  = dz.dataset.endpoint;
  const outputExt = dz.dataset.outputExt;

  // Click to open file picker
  dz.addEventListener('click', (e) => {
    if (e.target === input) return;
    input.click();
  });

  // File selected via picker
  input.addEventListener('change', () => {
    if (input.files.length > 0) handleFile(input.files[0]);
  });

  // Drag events
  dz.addEventListener('dragover', (e) => {
    e.preventDefault();
    dz.classList.add('dz-over');
  });

  dz.addEventListener('dragleave', (e) => {
    if (!dz.contains(e.relatedTarget)) {
      dz.classList.remove('dz-over');
    }
  });

  dz.addEventListener('drop', (e) => {
    e.preventDefault();
    dz.classList.remove('dz-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  // Reset button
  resetEl.addEventListener('click', resetUI);

  // ── Core handler ────────────────────────────────────────────────────────────
  async function handleFile(file) {
    // Validate extension
    const accept = dz.dataset.accept.split(',').map(a => a.trim().toLowerCase());
    const ext = '.' + file.name.split('.').pop().toLowerCase();
    if (!accept.includes(ext)) {
      dz.classList.add('dz-error');
      showToast(`❌ File không hợp lệ! Chỉ chấp nhận: ${accept.join(', ')}`, 'error');
      setTimeout(() => dz.classList.remove('dz-error'), 500);
      return;
    }

    // Validate size (50 MB)
    if (file.size > 50 * 1024 * 1024) {
      showToast('❌ File quá lớn! Giới hạn 50 MB.', 'error');
      return;
    }

    // Show progress UI
    showProgress(file.name);

    try {
      const blob = await uploadAndConvert(file);
      showResult(blob, file.name);
    } catch (err) {
      resetUI();
      dz.classList.add('dz-error');
      showToast(`❌ ${err.message}`, 'error');
      setTimeout(() => dz.classList.remove('dz-error'), 500);
    }
  }

  // ── Upload & Convert ─────────────────────────────────────────────────────────
  async function uploadAndConvert(file) {
    const formData = new FormData();
    formData.append('file', file);

    // Animate progress bar (indeterminate style)
    let fakeProgress = 0;
    const fakeInterval = setInterval(() => {
      // Slow down as it approaches 90%
      if (fakeProgress < 88) {
        fakeProgress += Math.random() * 4;
        setProgress(Math.min(fakeProgress, 88));
      }
    }, 200);

    let response;
    try {
      response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        body: formData,
      });
    } finally {
      clearInterval(fakeInterval);
    }

    if (!response.ok) {
      let detail = 'Lỗi không xác định';
      try {
        const err = await response.json();
        detail = err.detail || detail;
      } catch (_) {}
      throw new Error(detail);
    }

    // Jump to 100%
    setProgress(100);
    labelEl.textContent = 'Hoàn tất! Đang tải file…';

    const blob = await response.blob();
    return blob;
  }

  // ── UI helpers ───────────────────────────────────────────────────────────────
  function showProgress(filename) {
    dz.style.display = 'none';
    progressEl.hidden = false;
    resultEl.hidden   = true;
    labelEl.textContent = `Đang chuyển đổi "${filename}"…`;
    setProgress(0);
  }

  function setProgress(value) {
    fillEl.style.width = `${Math.min(value, 100)}%`;
  }

  function showResult(blob, originalName) {
    // Create object URL for download
    const url = URL.createObjectURL(blob);
    const stem = originalName.replace(/\.[^.]+$/, '');
    const outName = `${stem}.${outputExt}`;

    dlEl.href = url;
    dlEl.download = outName;
    dlEl.textContent = `⬇ Tải về ${outName}`;

    // Revoke after 5 minutes to free memory
    setTimeout(() => URL.revokeObjectURL(url), 5 * 60 * 1000);

    progressEl.hidden = true;
    resultEl.hidden   = false;

    showToast(`✅ Chuyển đổi "${outName}" thành công!`, 'success');
  }

  function resetUI() {
    dz.style.display = '';
    progressEl.hidden = true;
    resultEl.hidden   = true;
    input.value = '';

    // Revoke old URL if any
    if (dlEl.href && dlEl.href.startsWith('blob:')) {
      URL.revokeObjectURL(dlEl.href);
      dlEl.href = '#';
    }
  }
}

// ── Initialize both drop zones ─────────────────────────────────────────────────
setupDropZone({
  dzId:       'dz-pdf',
  inputId:    'input-pdf',
  progressId: 'progress-pdf',
  fillId:     'fill-pdf',
  labelId:    'label-pdf',
  resultId:   'result-pdf',
  dlId:       'dl-pdf',
  resetId:    'reset-pdf',
});

setupDropZone({
  dzId:       'dz-word',
  inputId:    'input-word',
  progressId: 'progress-word',
  fillId:     'fill-word',
  labelId:    'label-word',
  resultId:   'result-word',
  dlId:       'dl-word',
  resetId:    'reset-word',
});

// ── Health check on load ───────────────────────────────────────────────────────
window.addEventListener('load', async () => {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) throw new Error();
    console.log('[WordPDFTransfer] Server is healthy ✅');
  } catch {
    showToast('⚠️ Không kết nối được server. Hãy chắc chắn backend đang chạy.', 'error');
  }
});
