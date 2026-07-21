export function initBeforeAfter() {
  const range = document.getElementById('baRange');
  const before = document.getElementById('baBeforeWrap');
  const handle = document.getElementById('baHandle');
  if (!range || !before || !handle) return;

  function update() {
    const val = range.value;
    before.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
    handle.style.left = `${val}%`;
  }

  range.addEventListener('input', update);
  update();
}
