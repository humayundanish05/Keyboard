let isShift = false;
let currentLayout = "letters";


const output = document.getElementById("output");
const layoutLetters = document.getElementById("layout-letters");
const layoutSymbols = document.getElementById("layout-symbols");
const layoutEmojis = document.getElementById("layout-emojis");


function typeKey(char) {
  if (char === '\n') {
    output.value += "\n";
  } else {
    output.value += isShift ? char.toUpperCase() : char;
  }


  // Auto reset shift after one key press (optional)
  if (isShift) toggleShift();
}


function backspace() {
  output.value = output.value.slice(0, -1);
}


function toggleShift() {
  isShift = !isShift;


  const keys = document.querySelectorAll("#layout-letters .key");
  keys.forEach(key => {
    const char = key.textContent;
    if (char.length === 1 && /[a-zA-Z]/.test(char)) {
      key.textContent = isShift ? char.toUpperCase() : char.toLowerCase();
      key.setAttribute("onclick", `typeKey('${key.textContent}')`);
    }
  });
}


function switchLayout() {
  if (currentLayout === "letters") {
    layoutLetters.classList.add("hidden");
    layoutSymbols.classList.remove("hidden");
    layoutEmojis.classList.add("hidden");
    currentLayout = "symbols";
  } else if (currentLayout === "symbols") {
    layoutLetters.classList.add("hidden");
    layoutSymbols.classList.add("hidden");
    layoutEmojis.classList.remove("hidden");
    currentLayout = "emojis";
  } else {
    layoutLetters.classList.remove("hidden");
    layoutSymbols.classList.add("hidden");
    layoutEmojis.classList.add("hidden");
    currentLayout = "letters";
  }
}
