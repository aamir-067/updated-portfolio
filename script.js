alert('🚧 Welcome! This portfolio is under construction. Exciting updates coming soon. Thank you for your patience. 🚧');
function updateQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * 15);
    const randomQuote = quotes[randomIndex];
    const quoteTextElement = document.getElementById('quoteText');
    const quoteAuthorElement = document.getElementById('quoteAuthor');
    if (quoteTextElement && quoteAuthorElement) {
        quoteTextElement.textContent = randomQuote.text;
        quoteAuthorElement.textContent = randomQuote.author.split(',')[0];
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
// vars
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        if (e.key == 'ArrowLeft') {
            testimLeftArrow.click();
        }
        if (e.key == 'ArrowRight') {
            testimRightArrow.click();
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPos - touchEndPos;

        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }
    })
}






