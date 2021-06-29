const weather = document.querySelector("#weather")

const API_KEY = "013609e528214ea18caf5e80a7f53b77";
const COORDS = "coords"; 

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        const city = data.name;
        const temp = data.main.temp
        const info = data.weather[0].main;
        weather.innerText = `${city}, ${temp}'C "${info}"`
        console.log(data)
    })
}

function geoSuccess(location){
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;

    getWeather(lat,lng)
    
}

function geoError(){
    alert('error')
}


navigator.geolocation.getCurrentPosition(geoSuccess, geoError)