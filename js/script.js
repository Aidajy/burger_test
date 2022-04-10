$(document).ready(function(){
    $('.slider').slick({
        speed: 1000,
        Infinity: true,
        arrows: false,
        autoplay: true,
        dots:true,
        autoplaySpeed:5000
       
    });
    $('.slider_2').slick({
        speed: 1000,
        Infinity: false,
        arrows: false,
        dots:true,
        slidesToScrol: 1,
        slidesToShow: 1,
    });
});
