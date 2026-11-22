document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  const target = document.getElementById(button.dataset.copy);
  if (!target) return;
  const text = target.innerText;
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied';
  } catch (_) {
    const range = document.createRange();
    range.selectNodeContents(target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = 'Select and copy';
  }
  window.setTimeout(() => { button.textContent = original; }, 1600);
});
