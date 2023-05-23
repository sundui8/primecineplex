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
  document.getElementById("title").textContent = movie[currentSlideIndex].name
  document.getElementById("icon").setAttribute('href', movie[currentSlideIndex].urlp);
    
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

var today = new Date();
var sate = today.getDate();
var month = today.getMonth() + 1; 
var year = today.getFullYear();

var weekdays = ['Бүтэнсайн', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'];
var date = new Date();
var dayOfWeek = date.getDay();

for (var i = 1; i <= 5; i++) {
  var formattedDate = `${year}-${month < 10 ? '0' + month : month}-${sate < 10 ? '0' + sate : sate}`;
  sate++;
  today.setDate(today.getDate() + i);
  var element = document.getElementById('day' + i);
  var element1 = document.getElementById('date' + i)
  var currentWeekday = weekdays[(dayOfWeek + i - 1)];
  element.textContent = currentWeekday;
  element1.textContent = formattedDate;
}
var sate = sate -5;
for (var i = 6; i <= 10; i++) {
  var formattedDate = `${year}-${month < 10 ? '0' + month : month}-${sate < 10 ? '0' + sate : sate}`;
  sate ++;
  var element = document.getElementById('day' + i);
  var element1 = document.getElementById('date' + i)
  var currentWeekday = weekdays[(dayOfWeek + i + 1) % 7];
  element.textContent = currentWeekday;
  element1.textContent = formattedDate;
}
const header = document.querySelector('#header');
const navbar = document.querySelector('.navcontainer');

function fixNavbar() {
  if (window.scrollY + 65 > header.offsetHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNavbar);
