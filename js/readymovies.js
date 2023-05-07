$.getJSON('json/readymovies.json', function(data){
  
  var owlHTML = '';

  for (var i = 0; i < data.length; i++) {
    owlHTML += '<div class="item" data-idex="' + i + '"><img  class="imgitem" src="' + data[i].urlp + '"><div class="overlay unselected"></div></div>';
  }

  $('.owl-carousel').html(owlHTML);

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:2,
      },
      920:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:6
      },
      1900:{
        items:9
      }
    }
  });

  $('.owl-prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });

  document.getElementById("current-image").src = data[0].url;
  document.getElementById("genre").textContent = data[0].genres;
  document.getElementById("owlname").textContent = data[0].name;
  document.getElementById("owldesc").textContent = data[0].description;
  $('.owl-carousel [data-idex="' + 0 + '"]  div').removeClass('overlay');


  $('.item').click(function() {
    var index = $(this).data('idex');


    console.log('Clicked item index:', index);
    document.getElementById("current-image").src = data[index].url;
    document.getElementById("genre").textContent = data[index].genres;
    document.getElementById("owlname").textContent = data[index].name;
    document.getElementById("owldesc").textContent = data[index].description;

    $('.owl-carousel .unselected ').addClass('overlay');

    $('.owl-carousel [data-idex="' + index + '"]  div').removeClass('overlay');




    
  });

});
