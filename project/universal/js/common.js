
$(document).ready(function(){
 initTicketsGridSlider()

// gnb
    $('.gnb > li').hover(function() {
        $(this).find('.dp2').stop().slideDown(200);
    }, function() {
        $(this).find('.dp2').stop().slideUp(200);
    });


// main banner slider
    $('.main-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    });


// footer-sitemap
    $('.footer-sitemap > li').hover(function() {
        $(this).find('.footer-dp2 ').stop().slideDown(200);
    }, function() {
        $(this).find('.footer-dp2 ').stop().slideUp(200);
    });

    
// mobile hambuger menu
    const $mobileMenuToggle = $('.mobile-menu-toggle');
    const $gnb = $('.gnb');
    const $gnbRight = $('.gnb-right'); 
    const $gnbMainItems = $('.gnb > li > a');


    $mobileMenuToggle.on('click', function(e) {
        e.preventDefault(); 
        $(this).toggleClass('active');
        $gnb.toggleClass('active'); 

        if (!$gnb.hasClass('active')) {
            $gnb.find('.dp2').slideUp(300); 
            $gnb.find('li').removeClass('active'); 
        }
    });

    $gnbMainItems.on('click', function(e) {
        if (window.innerWidth <= 767) {
            const $parentLi = $(this).parent('li');
            const $dp2 = $parentLi.find('.dp2');

         
            if ($dp2.length) {
                e.preventDefault();

                if ($parentLi.hasClass('active')) {
                    $dp2.slideUp(300);
                    $parentLi.removeClass('active');
                } else {
                    $gnb.find('.dp2').slideUp(300);
                    $gnb.find('li').removeClass('active');

                    $dp2.slideDown(300);
                    $parentLi.addClass('active');
                }
            }
        }
    });



// mobile tickets slider
    $(window).on('resize', function() {
        if (window.innerWidth > 767) {
            $gnb.removeClass('active').css('display', '');
            $mobileMenuToggle.removeClass('active');
            $gnb.find('.dp2').css('display', '');
            $gnb.find('li').removeClass('active');
        }

        initTicketsGridSlider();
    });

    function initTicketsGridSlider() {
        const $ticketsGrid = $('.tickets-grid');
        const mobileBreakpoint = 767;

        if (document.documentElement.clientWidth <= mobileBreakpoint) { 
            if (!$ticketsGrid.hasClass('slick-initialized')) {
                $ticketsGrid.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: true,
                    dots: true
                });
            }
        } else {
            if ($ticketsGrid.hasClass('slick-initialized')) {
                $ticketsGrid.slick('unslick');
            }
        }
    }



 initEventCardBehavior();
    $(window).on('resize', initEventCardBehavior);

    function initEventCardBehavior() {
        const desktopBreakpoint = 768; 
        if (window.innerWidth >= desktopBreakpoint) {

            $('.event-card').off('click.cardExpand'); 

            $('.event-card').on('click.cardExpand', function() {
                const $clickedCard = $(this);
               
                if ($clickedCard.hasClass('event-card--active')) {
                    return;
                }

                $('.event-card').removeClass('event-card--active');

                $clickedCard.addClass('event-card--active');
            });

            if (!$('.events-container .event-card--active').length) {
                $('.events-container .event-card--card-one').addClass('event-card--active');
            }

        } else {
            
            $('.event-card').off('click.cardExpand');

            $('.event-card').removeClass('event-card--active');

        }
    }


// mobile resort

    $('.resort-card').on('click', function(e) {
    e.preventDefault(); 
    $(this).toggleClass('is-grayscale');
    $('.resort-card').not(this).removeClass('is-grayscale');
});




});// 마지막