let currentSlideIndex = 0;
let movie = [];

function setSlide(index) {
    currentSlideIndex = index;

    if (currentSlideIndex >= movie.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = movie.length - 1;
    }

    document.body.style.backgroundImage = `url(${movie[currentSlideIndex].url})`;
    document.getElementById("description").textContent = movie[currentSlideIndex].description;
    updateIndicator();
}

function nextSlide() {
    currentSlideIndex++;

    if (currentSlideIndex >= movie.length) {
        currentSlideIndex = 0;
    }

    document.body.style.backgroundImage = `url(${movie[currentSlideIndex].url})`;
    document.getElementById("description").textContent = movie[currentSlideIndex].description;
    updateIndicator();
}

function prevSlide() {
    currentSlideIndex--;

    if (currentSlideIndex < 0) {
        currentSlideIndex = movie.length - 1;
    }

    document.body.style.backgroundImage = `url(${movie[currentSlideIndex].url})`;
    document.getElementById("description").textContent = movie[currentSlideIndex].description;
    updateIndicator();
}

function updateIndicator() {
    let indicatorContainer = document.getElementById("indicator-container");
    let indicatorHtml = "";

    for (let i = 0; i < movie.length; i++) {
        let bulletClass = (i === currentSlideIndex) ? "current" : "";
        indicatorHtml += `<span class="indicator ${bulletClass}" onclick="setSlide(${i})"></span>`;
    }

    indicatorContainer.innerHTML = indicatorHtml;
}

function MoviesFromJson(jsonUrl) {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
        movie = data.imagesss;
        setSlide(0);
        setInterval(() => nextSlide(), 1000);
        })
        .catch(error => console.error(`Failed to load images from JSON: ${error}`));
        }

        window.onload = function() {
MoviesFromJson("test.json");
document.getElementById("prev-btn").addEventListener("click", prevSlide);
document.getElementById("next-btn").addEventListener("click", nextSlide);
};