const API_URL = "https://dummyjson.com";
const quoteEl = document.getElementById("quotes");
const buttonEl = document.getElementById("button");

const getAllQuotes = () => fetch(`${API_URL}/quotes`).then((res) => res.json());

buttonEl.addEventListener("click", (event) => {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getAllQuotes().then((data) => {
    const length = data.quotes.length;
    const randomQuote = data.quotes[getRandomArbitrary(0, length)];
    const quote = `${randomQuote.quote} - ${randomQuote.author}`;
    quoteEl.innerText = `${quote}`;
  });
});
