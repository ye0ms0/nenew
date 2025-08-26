$(document).ready(function(){


// gnb
    $('.gnb-left > li, .gnb-right > li').hover(function() {
        $(this).find('.dp2').stop().slideDown(200);
    }, function() {
        $(this).find('.dp2').stop().slideUp(200);
    });


// 메인배너 슬라이드
    $('.main-visual').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'dots_custom',
    autoplay: true,
    autoplaySpeed: 1500,
    });



});// 마지막