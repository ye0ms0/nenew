/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {
    const $portfolioItems = $(".portfolio-item");

    $(window).on('scroll', function() {
        const winHeight = $(window).height();

        $portfolioItems.each(function() {
            const $el = $(this);
            const elTop = $el.offset().top;
            const scroll = $(window).scrollTop();
            const exposurePoint = elTop - winHeight + 150;

            if (scroll > exposurePoint) {
                $el.addClass('active');
            }
        });
    }).scroll();
});

// 모바일 헤더 스크롤 시 숨기기/보이기
$(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var $navbar = $('.navbar-fixed-top');
    var navbarHeight = $navbar.outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if ($(window).width() <= 768) {
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

             if (st > lastScrollTop && st > navbarHeight) {
            $navbar.removeClass('nav-down').addClass('nav-up');
            $('body').removeClass('body-scrolled');
        } 
    
        else if (st < lastScrollTop) {
            $navbar.removeClass('nav-up').addClass('nav-down');
            $('body').addClass('body-scrolled');
        }
    }
    
    else {
        $navbar.removeClass('nav-down nav-up');
        $('body').removeClass('body-scrolled');
    }

    lastScrollTop = st;
}

hasScrolled();
});