const ball = document.getElementById("ball");
let position = 0;
let velocity = 0;
const gravity = 0.8;
const bounce = -0.7;
let isAnimating = true;

function animate() {
    if (!isAnimating) return;

    velocity += gravity;
    position += velocity;

    if (position > window.innerHeight - 50) {
        position = window.innerHeight - 50;
        velocity *= bounce;
    }
    ball.style.transform = `translate(-50%, ${position}px)`;
    requestAnimationFrame(animate);
}

animate();

ball.addEventListener('click', () => {
    isAnimating = !isAnimating;
    if (isAnimating) animate();
});

ball.style.transform = `translate(-50%, ${position}px)`;