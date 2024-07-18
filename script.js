let stopwatch;
let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    return date.toISOString().substr(11, 8);
}

function startStopwatch() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;

    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10);
}

function pauseStopwatch() {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(timerInterval);
}

function resetStopwatch() {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;

    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = formatTime(elapsedTime);
    lapList.innerHTML = '';
}

function recordLap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
    lapList.appendChild(lapItem);
}
