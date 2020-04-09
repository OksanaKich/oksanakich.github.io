
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
   
    $('.fade__slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
     
  $('.center__slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false
        }
      }
    ]

  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false
        }
      }
    ]

  });		   
     
});



