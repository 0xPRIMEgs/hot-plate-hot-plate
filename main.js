const screens = [new TitleScreen(), new ExploreScreen(), new BattleScreen()];
screens.forEach(s => s.init());

var currentScreen = screens[0];

// --- Loop ---
let last = performance.now();
function loop(now) {
    const dt = (now - last) / 1000; // seconds
    last = now;

    currentScreen.update(dt);
    currentScreen.render(ctx);

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);