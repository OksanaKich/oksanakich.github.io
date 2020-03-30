
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
     
     
  });



