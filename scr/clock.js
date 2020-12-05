const clocktime = document.querySelector(".js-clock"),
  clocktitle = clocktime.querySelector("h1"),
  hourClock = clocktime.querySelector("h3");

function runTime() {
  const dayTime = new Date();
  const hours = dayTime.getHours();
  const minutes = dayTime.getMinutes();
  // const seconds = dayTime.getSeconds();
  clocktitle.innerText = `${hours > 12 ? `${hours}`-12 : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  if(hours > 12){
    hourClock.innerText = `PM`
  }else {
    hourClock.innerText = `AM`
  }
}

function init() {
  runTime();
  setInterval(runTime);
}

init();
