

$(window).scroll(function(){
  if($(this).scrollTop()>1800) {
    $('.page-up').fadeIn();
  } else {
    $('.page-up').fadeOut();
  }
});

$("a[href=#up]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().header+"px"});
  return false;
});





