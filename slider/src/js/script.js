
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});

$(document).ready(function(){
    
     $('.slider-banner').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: true,
        responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
            
           }
         },
       ]
    
     });  
     $('.about__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            
          }
        },
      ]
    
    });  
   
    $('.zoom__slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
        
     
  });



