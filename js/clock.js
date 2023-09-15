const clock = document.querySelector("div#clock");
const toggle = document.querySelector("#toggle");
const CLOCK_TYPE_KEY = "clockType";
let clockType = "Y";

function saveClockType() {
    localStorage.setItem(CLOCK_TYPE_KEY, clockType);
}

function getClock() {
    const date = new Date();
    let h = date.getHours();
    if (clockType === "N") h = h % 12;
    const hours = String(h).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

function setToggle() {
    clockType = clockType === "Y" ? "N" : "Y";
    saveClockType();
    getClock();
}

toggle.addEventListener("click", setToggle);

const savedClockType = localStorage.getItem(CLOCK_TYPE_KEY);
if (savedClockType !== null) clockType = savedClockType

getClock();
setInterval(getClock, 1000);