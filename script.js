const target = document.getElementById('target');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveTarget() {
    const x = Math.random() * (gameArea.offsetWidth - target.offsetWidth);
    const y = Math.random() * (gameArea.offsetHeight - target.offsetHeight);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Puntuación: ${score}`;
    moveTarget();
});

// Iniciar el juego moviendo el botón a una posición aleatoria
moveTarget();