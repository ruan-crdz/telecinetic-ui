const cursorEl = document.getElementById("cursor");

export function moveCursor(x, y) {
  cursorEl.style.left = `${x}px`;
  cursorEl.style.top = `${y}px`;
}
