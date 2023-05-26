fetch('json/readymovies.json')
  .then(response => response.json())
  .then(data => {
    const moviesList = document.getElementById('parallax-container');
    data.forEach(movie => {
      moviesList.innerHTML += `
      <div class="parallax" style="background-image: url(${movie.url});">
      <div>
        <h1 id="pname">
        ${movie.name}
        </h1>
        <p id="release-date">
        ${movie.date}
        </p>
      </div>
      <lord-icon src="https://cdn.lordicon.com/dpohzien.json" trigger="hover" colors="primary:#ffffff" state="hover" style="width:100px;height:100px"></lord-icon>
      <a href="index.html">
        Дэлгэрэнгүй
      </a> 
      </div>`;
    });
  })



// $.getJSON('json/readymovies.json', function(dat){
  
//     var owlHTML = '';
  
//     for (var i = 0; i < dat.length; i++) {
//       owlHTML += '<div class="block"><img class="img-parallax" src="' + dat[i].url + '"><h1 id="pname">' + dat[i].name +'</h1><p id="release-date">'+ dat[i].date +'</p><lord-icon src="https://cdn.lordicon.com/dpohzien.json" trigger="hover" colors="primary:#ffffff" state="hover" style="width:100px;height:100px"></lord-icon><p id="more">Дэлгэрэнгүй</p></div>';
//     }
//     $('.para').replaceWith(owlHTML);
//     $('.img-parallax').each(function(){
//       var img = $(this);
//       var imgParent = $(this).parent();
//       function parallaxImg () {
//         var speed = -1.2;
//         var imgY = imgParent.offset().top;
//         var winY = $(this).scrollTop();
//         var winH = $(this).height();
//         var parentH = imgParent.innerHeight();
    
    
//         // The next pixel to show on screen      
//         var winBottom = winY + winH;
    
//         // If block is shown on screen
//         if (winBottom > imgY && winY < imgY + parentH) {
//           // Number of pixels shown after block appear
//           var imgBottom = ((winBottom - imgY) * speed);
//           // Max number of pixels until block disappear
//           var imgTop = winH + parentH;
//           // Porcentage between start showing until disappearing
//           var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
//         }
//         img.css({
//           top: imgPercent + '%',
//           transform: 'translate(-50%, -' + imgPercent + '%)'
//         });
//       }
//       $(document).on({
//         scroll: function () {
//           parallaxImg();
//         }, ready: function () {
//           parallaxImg();
//         }
//       });
//     });
// });
