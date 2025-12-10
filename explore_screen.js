class ExploreScreen extends Screen {
  init(){
    this.img_bg1 = img("beat_bg1.png")
    this.img_bg2 = img("beat_bg2.png")
    this.showAltBg = false;

    this.player = { x: canvas.width / 2, y: canvas.height / 2, speed: 200, color: "#00cc00", size: 24, facing: "right" };
  }

  update(dt) {
    // WSAD movement
    if (keys["w"]){ this.player.y -= this.player.speed * dt; this.player.y = Math.max(190, this.player.y) }
    if (keys["s"]){ this.player.y += this.player.speed * dt; this.player.y = Math.min(420, this.player.y) }
    if (keys["a"]){ this.player.x -= this.player.speed * dt; this.player.x = Math.max(0, this.player.x); this.player.facing = "left"; }
    if (keys["d"]){ this.player.x += this.player.speed * dt; this.player.x = Math.min(640 - this.player.size, this.player.x); this.player.facing = "right"; }

    this.showAltBg = keys["e"];
  }

  drawActor(actor){
    ctx.fillStyle=actor.color; ctx.fillRect(actor.x,actor.y,actor.size,actor.size);
    ctx.fillStyle="#fff";
    if(actor.facing==='right') ctx.fillRect(actor.x+actor.size-6,actor.y+8,4,4);
    else ctx.fillRect(actor.x+2,actor.y+8,4,4);
  }

  render(ctx) {
    const bg = this.showAltBg ? this.img_bg2 : this.img_bg1;
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    this.drawActor(this.player)

    // UI hint
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "14px monospace";
    ctx.fillText("WASD to move, E to toggle background", 240, 24);
  }
}