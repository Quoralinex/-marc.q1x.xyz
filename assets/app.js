(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    const now = new Date();
    yearEl.textContent = String(now.getFullYear());
  }
})();
