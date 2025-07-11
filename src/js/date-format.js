document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector('.auto-date');
    const now = new Date();
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    el.textContent = now.toLocaleDateString('en-US', options);
  });