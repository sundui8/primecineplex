$(function(){
    $("#nav-placeholder").load("index.html header");
  });
  var receivedData = localStorage.getItem("myData");
  let currentSlideIndex = receivedData;
  // let movie = [];
  
  function setSlide(index) {
      currentSlideIndex = index;
  
      document.getElementById("header").style.backgroundImage = `url(${movie[currentSlideIndex].url})`;
      document.getElementById("movie-name").textContent = movie[currentSlideIndex].name
      document.getElementById("description").textContent = movie[currentSlideIndex].description
      document.getElementById("rating").textContent = movie[currentSlideIndex].rating
      document.getElementById("link").href = movie[currentSlideIndex].link;
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
