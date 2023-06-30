// // for random quote and auther

function updateQuote(quotes){
    const randomIndex = Math.floor(Math.random() * 1642);
    const randomQuote = quotes[randomIndex];
    const quoteTextElement = document.getElementById('quoteText');
    const quoteAuthorElement = document.getElementById('quoteAuthor');
    if (quoteTextElement && quoteAuthorElement) {
    quoteTextElement.textContent = randomQuote.text;
    quoteAuthorElement.textContent = randomQuote.author;
    }
}

fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const quotes = {};

    data.forEach(function(quote, index) {
    const text = quote.text;
    const author = quote.author;

    quotes[index] = {
        text: text,
        author: author
    };
    });
    updateQuote(quotes);
});




// test =======
const btn = document.querySelector(".btn-second");
console.log(btn.style);
