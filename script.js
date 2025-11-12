
let time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

timeLeft = (time.hours * 3600) + (time.minutes * 60) + time.seconds;

const timeDisplay = document.getElementById("countdown");

let isRunning = false;
let isPaused = false;

//Time Buttons functionality
document.getElementById("15-seconds").addEventListener("click",() =>{
    if (isRunning || isPaused) {
    timeLeft += 15; // (or whatever number)
  } else {
    time.seconds += 15;
    calculateTime();
  }

  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("30-seconds").addEventListener("click",() =>{
  if (isRunning || isPaused) {
  timeLeft += 30; // (or whatever number)
} else {
  time.seconds += 30;
  calculateTime();
}

  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("1-minutes").addEventListener("click",() =>{
    if (isRunning || isPaused) {
  timeLeft += 60; // (or whatever number)
} else {
  time.minutes += 1;
  calculateTime();
}

  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("5-minutes").addEventListener("click",() =>{
  if (isRunning || isPaused) {
  timeLeft += 5 * 60; // (or whatever number)
} else {
  time.minutes += 5;
  calculateTime();
}
  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("15-minutes").addEventListener("click",() =>{
  if (isRunning || isPaused) {
  timeLeft += 15 * 60; // (or whatever number)
} else {
  time.minutes += 15;
  calculateTime();
}
  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

document.getElementById("30-minutes").addEventListener("click",() =>{
  if (isRunning || isPaused) {
  timeLeft += 30 * 60; // (or whatever number)
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
  if(isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = true;
    document.getElementById("reset-btn").textContent = "Reset";
  } else {
    time.hours = 0;
    time.minutes = 0;
    time.seconds = 0;

  timeLeft = 0;

  updateTimerDisplay();
  clearInterval(timerInterval);

  document.getElementById("time-over").style.display = "none";
  console.log(time);

  document.getElementById("reset-btn").textContent = "Reset";
  }
    
});



let timerInterval;
//Start Timer functionality
document.getElementById("start-btn").addEventListener("click", () => {
  if(!isRunning && !isPaused){
    countDown(); //start fresh
  } else if (isPaused){
    countDown();
    isPaused = false;
  }

  document.getElementById("reset-btn").textContent = "Pause";
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
  isPaused = false;

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;           // subtract 1 second
      updateTimerDisplay(); // refresh display
    } else {
      clearInterval(timerInterval); // stop when done
      isRunning = false;

      document.getElementById("time-over").style.display = "block";
      document.getElementById("reset-btn").textContent = "Reset"
    }
  }, 1000);
}