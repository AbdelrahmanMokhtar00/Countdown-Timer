let timer;
let totalTime;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const timeInput = document.getElementById('timeInput');

function updateDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    const [minutes, seconds] = timeInput.value.split(':').map(Number);
    totalTime = (minutes * 60) + seconds;
    if (totalTime <= 0) return;

    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;

    timer = setInterval(() => {
        totalTime--;
        updateDisplay();
        if (totalTime <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            startButton.disabled = false;
            pauseButton.disabled = true;
            resetButton.disabled = true;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    totalTime = 0;
    updateDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Error Handling
function startTimer() {
    const [minutes, seconds] = timeInput.value.split(':').map(Number);
    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60) {
        alert("Please enter a valid time in MM:SS format.");
        return;
    }
    totalTime = (minutes * 60) + seconds;
    if (totalTime <= 0) return;

    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;

    timer = setInterval(() => {
        totalTime--;
        updateDisplay();
        if (totalTime <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            startButton.disabled = false;
            pauseButton.disabled = true;
            resetButton.disabled = true;
        }
    }, 1000);
}

// Visual Indicator for Last 10 Seconds
function updateDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (totalTime < 10) {
        timerDisplay.style.color = 'red';
    } else {
        timerDisplay.style.color = 'black';
    }
}

// Dark Mode
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.buttons button').forEach(button => {
        button.classList.toggle('dark-mode');
    });
});
