const BACKGROUND_KEY = "background";
const url = "https://cataas.com/cat?tags=cute&json=true&width=1000";
const backgroundItem = document.querySelector(".background-item");
const mainView = document.querySelector(".main-view");
const skip = document.querySelector("#skip");

function getBackground() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            saveBackground(data);
            setBackground(data);
        });
}

function setBackground(background) {
    backgroundItem.style.backgroundImage = `url('https://cataas.com${background.url}')`;
    mainView.classList.remove("hidden");
}

function saveBackground(background) {
    localStorage.setItem(BACKGROUND_KEY, JSON.stringify(background));
}

skip.addEventListener("click", getBackground);

const savedBackground = localStorage.getItem(BACKGROUND_KEY);
if (savedBackground !== null) {
    setBackground(JSON.parse(savedBackground));
} else {
    getBackground();
}
