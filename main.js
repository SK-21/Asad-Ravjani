
 var images = [
  'url("p (1).jpeg")', 
  //'url\(\"pic..2.jpeg\"\)', 
  'url("img1..jpg")'
    //'url("compressed img/pic2 (1).jpg")', 
  //'url\(\"p (1).jpeg\"\)', 
   // 'url("pic2...jpeg")'
];
var num = 0;

setInterval(function() {
    next()
}, 2000);

 function next() {
    
     num++;
     if(num >= images.length) {
        num = 0;
     }
     document.body.style.backgroundImage = images[num];
     {}
}

$(document).ready(function () {
    $('.menu-toggler').on('click' , function () {
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click' , function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $("nav a[href*='#'],").on("click", function () {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top 
           }, 2000);
       });

       $(".top-nav").on("click", function () {
        $("html, body").animate({
          scrollTop: 0
           }, 1000); 
      });
          // animations
      AOS.init({
        easing: "ease",
        duration: 500,
        once: true
      });
    
});

//////////////////////////////////////////////////////////////


      $(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('#up').css({
            "opacity":"1", "pointer-events":"auto"
          });
        }else{
          $('#up').css({
            "opacity":"0", "pointer-events":"none"
          });
        }
      });
      $('#up').click(function(){
        $('html').animate({scrollTop:0}, 500);
      });
    });
