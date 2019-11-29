const hamburger = document.querySelector(`.hamburger`);

hamburger.addEventListener('click', (e) => {
  e.target.closest('.hamburger').classList.toggle('hamburger--active');
  e.target.closest('.menu').querySelector('.menu__list').classList.toggle('menu__list--active');
});

$(document).ready(function(){
  $('.customers__slider').slick({
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  function moveProgressBar(node, nodeLine, tooltip, animationLenth = 1500) {
    const progressElement = $(node);
    progressElement.each(function(value, item){
        $(item).find(nodeLine).animate({
            width: item.dataset.progressPercent+'%'
        }, animationLenth);
        $(item).find(tooltip).show(animationLenth);
    });
  }

  let animate = true;

  $(window).scroll(function(){
    
      if($('.skills').offset().top <=  $(window).scrollTop() + 100) {
          if(animate) {
              moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
          }
          animate = false;
      }
  });

});

$(function() {
  if ($.browser.msie && $.browser.version.substr(0,1)<7)
  {
    $('.tooltip').mouseover(function(){
          $(this).children('span').show();
        }).mouseout(function(){
          $(this).children('span').hide();
        })
  }
});



