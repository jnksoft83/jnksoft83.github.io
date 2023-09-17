(() => {
    const time = document.querySelector("#time");
    const toggle = document.querySelector("#toggle");
    const CLOCK_TYPE_KEY = "clockType";
    let clockType = "Y";

    function saveClockType() {
        localStorage.setItem(CLOCK_TYPE_KEY, clockType);
    }

    function getClock() {
        const date = new Date();
        let h = date.getHours();
        let hours = String(h).padStart(2, "0");
        if (clockType === "N") {
            h = h % 12 || 12;
            hours = h >= 12 ? `PM ${h}` : `AM ${h}`;
        }
        const minutes = String(date.getMinutes()).padStart(2, "0");
        time.innerText = `${hours}:${minutes}`;
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
    setInterval(getClock, 10000);
}) ();