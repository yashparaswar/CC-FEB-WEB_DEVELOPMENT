
const count = () => {
    const nowTime = new Date();
    const endTime = new Date('2019-08-31 14:00:00').getTime();
    let day = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;
    let secound = Math.floor(endTime / 1000 - nowTime / 1000) % 60;

   
}
setInterval(count, 1000);

/*---------------------------------  Stoper: -------------------------------------------*/

const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const stoper = document.querySelector('#stoper');
let index = "";
let s = 0;
let ms = 0;

const start = () => {
    stoper.classList.toggle('true');
    if (stoper.classList.contains('true')) {
        index = setInterval(() => {
            ms++;
            if (ms == 100) {
                ms = 0;
                s++;
            };
            if (ms < 10) ms = "0" + ms;
            stoper.textContent = `${s}:${ms}`;
        }, 10)
        startBtn.textContent = "Pause";
    }
    else {
        clearInterval(index);
        startBtn.textContent = "Start";
        const li = document.createElement('li');
        li.textContent = `${s}:${ms}`;
        document.querySelector('#lapTime').appendChild(li);
    };
}

const reset = () => {
    stoper.textContent = '0:00';
    s = 0;
    ms = 0;
    clearInterval(index);
    stoper.classList.remove('true');
    document.querySelector('#lapTime').textContent = "";
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);

/*---------------------------------  Timer: -------------------------------------------*/


const countContainer = document.querySelectorAll(".count-digit");
const startAction = document.getElementById("start1");
const stopAction = document.getElementById("stop-timer");
const resetAction = document.getElementById("reset1");
const defaultValue = 2 * 60;

// variable to the time
var countDownTime = defaultValue;

// variable to store time interval
var timerID;

// Variable to track whether timer is running or not
var isStopped = true;

// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 500);
  }
};

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

// Function to reset Countdown
const resetTimer = () => {
  stopTimer();
  countDownTime = defaultValue;
  renderTime();
};
startAction.onclick = startTimer;
resetAction.onclick = resetTimer;
stopAction.onclick = stopTimer;
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// function to execute timer
const runCountDown = () => {
  // decement time
  countDownTime -= 1;
  //Display updated time
  renderTime();
  if (countDownTime === 0) {
    stopTimer();
countDownTime = defaultValue;
  }
};