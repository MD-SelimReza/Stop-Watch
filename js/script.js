const minutesDisplay = document.getElementById('minutesDisplay');
const secondsDisplay = document.getElementById('secondsDisplay');
const millisecondsDisplay = document.getElementById('millisecondsDisplay');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let intervalId;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let millisecondsStr = "";
let secondsStr = "";
let minutesStr = "";

startBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        milliseconds++;
        if (milliseconds >= 250) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
        }

        millisecondsStr =
            milliseconds < 10
                ? "00" + milliseconds
                : milliseconds < 100
                    ? "0" + milliseconds
                    : milliseconds;
        secondsStr = seconds < 10 ? "0" + seconds : seconds;
        minutesStr = minutes < 10 ? "0" + minutes : minutes;

        minutesDisplay.textContent = minutesStr;
        secondsDisplay.textContent = secondsStr;
        millisecondsDisplay.textContent = millisecondsStr;
    }, 1);
});


stopBtn.addEventListener('click', function () {
    clearInterval(intervalId);
});


resetBtn.addEventListener('click', function () {

    clearInterval(intervalId);

    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    millisecondsDisplay.textContent = "000";

    minutes = 0;
    seconds = 0;
    milliseconds = 0;
});