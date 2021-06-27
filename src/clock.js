const clockText = document.querySelector(".js-clock")

function getTime(){
    const date = new Date();
    const currentHour = date.getHours()
    const currentMinutes = date.getMinutes()
    const currentTime = `
    ${currentHour < 10 ? `0${currentHour}` : currentHour} : ${currentMinutes < 10 ? `0${currentMinutes}`:currentMinutes}`
    clockText.innerText = currentTime;
}
getTime();
setInterval(getTime, 1000);