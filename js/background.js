(() => {
    const BACKGROUND_KEY = "background";
    const url = "https://api.thecatapi.com/v1/images/search";
    const backgroundItem = document.querySelector(".background-item");
    const mainView = document.querySelector(".main-view");
    const skip = document.querySelector("#change");

    function getBackground() {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                saveBackground(data[0]);
                setBackground(data[0]);
            });
    }

    function setBackground(background) {
        backgroundItem.style.backgroundImage = `url('${background.url}')`;
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
}) ();
