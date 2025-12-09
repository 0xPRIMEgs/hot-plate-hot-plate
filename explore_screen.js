class ExploreScreen extends Screen {
  init(){
    this.img_bg1 = img("beat_bg1.png")
    this.img_bg2 = img("beat_bg2.png")
    this.showAltBg = false;

    this.player = { x: canvas.width / 2, y: canvas.height / 2, speed: 200, color: "#ffcc00", size: 24 };
  }

  update(dt) {
    // WSAD movement
    if (keys["w"]) this.player.y -= this.player.speed * dt;
    if (keys["s"]) this.player.y += this.player.speed * dt;
    if (keys["a"]) this.player.x -= this.player.speed * dt;
    if (keys["d"]) this.player.x += this.player.speed * dt;

    this.showAltBg = keys["e"];

    // Clamp to canvas
    const r = this.player.size / 2;
    this.player.x = Math.max(r, Math.min(canvas.width - r, this.player.x));
    this.player.y = Math.max(r, Math.min(canvas.height - r, this.player.y));
  }
  
  render(ctx) {
    const bg = this.showAltBg ? this.img_bg2 : this.img_bg1;
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = this.player.color;
    ctx.beginPath();
    ctx.arc(this.player.x, this.player.y, this.player.size / 2, 0, Math.PI * 2);
    ctx.fill();

    // UI hint
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "14px monospace";
    ctx.fillText("WASD to move, E to toggle background", 12, 24);
  }
}