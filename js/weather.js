const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "6282aa5ec42dc74020f8f72248e5d164";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.dir(data);
            city.innerText = data.name;
            weather.style.backgroundImage = `url('https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`;
            weather.innerText = `${Math.round(data.main.temp)}°`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);