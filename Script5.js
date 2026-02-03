let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
}

function pause() {
    isRunning = false;
    clearInterval(timer);
}

function reset() {
    pause();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
}

function lap() {
    if (isRunning) {
        const li = document.createElement("li");
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
}

function updateTime() {
    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    display.textContent =
        formatTime(minutes) + ":" +
        formatTime(seconds) + ":" +
        formatTime(milliseconds);
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

