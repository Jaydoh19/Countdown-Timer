
let time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

timeLeft = (time.hours * 3600) + (time.minutes * 60) + time.seconds;

const timeDisplay = document.getElementById("countdown");
let isRunning = false;

//Time Buttons functionality
document.getElementById("15-seconds").addEventListener("click",() =>{
  if (isRunning) {
    //  add directly to remaining time
    timeLeft += 15;
  } else {
    // modify base time normally
    time.seconds += 15;
    calculateTime();
  }

  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("30-seconds").addEventListener("click",() =>{
  if (isRunning) {
    //  add directly to remaining time
    timeLeft += 30;
  } else {
    // modify base time normally
    time.seconds += 30;
    calculateTime();
  }

  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("1-minutes").addEventListener("click",() =>{
    if (isRunning) {
    timeLeft += 60; // for +1 minute
  } else {
    time.minutes += 1;
    calculateTime();
  }

  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("5-minutes").addEventListener("click",() =>{
  if (isRunning) {
    timeLeft += 5 * 60; // for +5 minute
  } else {
    time.minutes += 5;
    calculateTime();
  }
  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("15-minutes").addEventListener("click",() =>{
  if (isRunning) {
    timeLeft += 15 * 60; // for +15 minute
  } else {
    time.minutes += 15;
    calculateTime();
  }
  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("30-minutes").addEventListener("click",() =>{
  if (isRunning) {
    timeLeft += 30 * 60; // for +30 minute
  } else {
    time.minutes += 30;
    calculateTime();
  }
  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

//Reset Button

document.getElementById("reset-btn").addEventListener("click", () => {
    time.hours = 0;
    time.minutes = 0;
    time.seconds = 0;

  timeLeft = (time.hours * 3600) + (time.minutes * 60) + time.seconds;

  updateTimerDisplay();
  clearInterval(timerInterval);
  console.log(time);
  console.log(timeLeft);

});

let timerInterval;
//Start Timer functionality
document.getElementById("start-btn").addEventListener("click", () => {
  countDown();
});


//Functions

function updateTimerDisplay(){
  hours   = Math.floor(timeLeft / 3600)
  minutes = Math.floor((timeLeft % 3600) / 60)
  seconds = timeLeft % 60

  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  let displayString = hours + ":" + minutes + ":" + seconds;
  timeDisplay.innerHTML = displayString;
}

function calculateTime(){
  // Convert extra seconds into minutes
  if (time.seconds >= 60) {
    time.minutes += Math.floor(time.seconds / 60);
    time.seconds = time.seconds % 60;
  }

  // Convert extra minutes into hours
  if (time.minutes >= 60) {
    time.hours += Math.floor(time.minutes / 60);
    time.minutes = time.minutes % 60;
  }

  timeLeft = (time.hours * 3600) + (time.minutes * 60) + time.seconds
}

function countDown() {
  // Prevent multiple countdowns at once
  clearInterval(timerInterval);
  isRunning = true;

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;           // subtract 1 second
      updateTimerDisplay(); // refresh display
    } else {
      clearInterval(timerInterval); // stop when done
      console.log("Time’s up!");
    }
  }, 1000);
}