
let time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

timeLeft = (time.hours * 3600) + (time.minutes * 60) + time.seconds;

const timeDisplay = document.getElementById("countdown");

//Time Button functionality
document.getElementById("15-seconds").addEventListener("click",() =>{
  time.seconds += 15;
  
  calculateTime();
  updateTimerDisplay();
  console.log(time);
  console.log(timeLeft);
})

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


function countDown(){
   if(timeLeft > 0) {
     timeLeft--
  } 
}