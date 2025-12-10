class TitleScreen extends Screen {
  init(){

  }

  update(dt) {
    // WSAD movement
    if (keys["enter"]){
      currentScreen = screens[1];
    }
  }
  
  render(ctx) {
    // Background
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title text
    ctx.fillStyle = "#fff";
    ctx.font = "48px monospace";
    ctx.textAlign = "center";
    ctx.fillText("HOT PLATE HOT PLATE", canvas.width / 2, canvas.height / 3);

    // Prompt
    ctx.font = "24px monospace";
    ctx.fillText("Press ENTER to Start", canvas.width / 2, canvas.height / 2);
  }
}