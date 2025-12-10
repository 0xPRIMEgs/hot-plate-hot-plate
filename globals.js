const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function img(s){
    var result = new Image()
    result.src = s
    return result
}

// --- Input ---
const keys = []
const prev_keys = []
const just_keys = []
window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true   
});
window.addEventListener("keyup", (e) => { keys[e.key.toLowerCase()] = false; });

function handleJustKeys() {
    for (const key in keys) {
        just_keys[key] = (!prev_keys[key] && keys[key]);
        prev_keys[key] = keys[key];
    }
}

// --- Screen superclass ---
class Screen {
  init(){}
  update(dt) {}
  render(ctx) {}
}