// Tiny retro easter egg: ↑ ↑ ↓ ↓ ← → ← → B A
(() => {
  const code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let pos = 0;
  const message = document.getElementById("easterEgg");
  window.addEventListener("keydown", (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === code[pos]) {
      pos += 1;
      if (pos === code.length) {
        message.classList.add("show");
        document.documentElement.style.setProperty("--green", "#a8ff74");
        setTimeout(() => message.classList.remove("show"), 3200);
        pos = 0;
      }
    } else {
      pos = key === code[0] ? 1 : 0;
    }
  });
})();