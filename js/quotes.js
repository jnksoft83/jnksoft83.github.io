(() => {
    const QUOTE_KEY = "quotes";
    const url = "https://api.adviceslip.com/advice";
    const quote = document.querySelector("#quote");

    function getQuote() {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setQuote(data);
            });
    }

    function setQuote(data) {
        let text = data?.slip?.advice;
        if (text === undefined) {
            text = "";
        } else {
            text = `"${text}"`;
        }
        quote.innerText = text;
    }

    getQuote();
}) ();