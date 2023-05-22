$(function(){
  $("#nav-placeholder").load("index.html header");
  $("#footer-placeholder").load("index.html footer")
});

var receivedData = localStorage.getItem("myData");
let currentSlideIndex = receivedData;  

function setSlide(index) {
    currentSlideIndex = index;

    var genres = movie[currentSlideIndex].genres
    var container =  document.getElementById("genre")

    for (var i = 0; i < genres.length; i++) {
      var genre = genres[i];
      var pElement = document.createElement("p");
      pElement.textContent = genre;
      container.appendChild(pElement);
  }
    document.getElementById("header").style.backgroundImage = `url(${movie[currentSlideIndex].url})`;
    document.getElementById("movie-name").textContent = movie[currentSlideIndex].name
    document.getElementById("description").textContent = movie[currentSlideIndex].description
    document.getElementById("rating").textContent = movie[currentSlideIndex].rating
    document.getElementById("link").href = movie[currentSlideIndex].link;
    document.getElementById("desc").textContent = movie[currentSlideIndex].description
    document.getElementById("poster").src =  movie[currentSlideIndex].urlp
    document.getElementById("duration").textContent = movie[currentSlideIndex].duration
    document.getElementById("age").textContent = movie[currentSlideIndex].rating
    document.getElementById("director").textContent = movie[currentSlideIndex].director
    document.getElementById("imdb").textContent = movie[currentSlideIndex].imdb

  }

function MoviesFromJson(jsonUrl) {
  fetch(jsonUrl)
      .then(response => response.json())
      .then(data => {
      movie = data;
      setSlide(currentSlideIndex);
      })
}
window.onload = function() {
  MoviesFromJson("json/readymovies.json");
};




