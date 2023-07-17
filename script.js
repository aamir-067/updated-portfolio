console.log("testing")
// // for random quote and auther

function updateQuote(quotes) {
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
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const quotes = {};

        data.forEach(function (quote, index) {
            const text = quote.text;
            const author = quote.author;

            quotes[index] = {
                text: text,
                author: author
            };
        });
        updateQuote(quotes);
    });


// code for projects section
(function () {
    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})();






