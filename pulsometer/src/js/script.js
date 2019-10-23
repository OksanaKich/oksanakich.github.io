
$(document).ready(function(){
  $('.carousel__inner').slick({
      infinite: true,
      speed: 1300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
          {
            breakpoint: 992,
            settings: {
              /* dots: true, */
              arrows: false,
            }
          }
        ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

/*   $('.catalog-item__link').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })

  $('.catalog-item__back').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  }) */
  function toggleSlide(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Modal (this означає, що ця кнопка на яку я натиснув)

  $('[data-modal=consult]').on('click', function(){
    $('.overlay, #consult').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consult, #order, #thanks').fadeOut('slow');
  });
/*   $('.btn_mini').on('click', function(){
    $('.overlay, #order').fadeIn('slow');
  }); */
  $('.btn_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    }) 
  });

 /*  $('#consult-form').validate();
  $('#consult').validate();
  $('#order').validate();//chrome вже має вбудоване правило, котре при прописуванні в html require, викликає сповіщення "Заповніть це поле"Можеш потім доробити */

  $('input[name=phone]').mask("+38 (999) 999-9999");

  //Smooth scroll and page up

  $(window).scroll(function(){
    if($(this).scrollTop()>1600) {
      $('.page-up').fadeIn();
    } else {
      $('.page-up').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();

});