$(document).ready(function () {
    var menu_offset_top = $('.main.main-header').outerHeight();
    var checkWidths = jQuery(window).width();
    function processScroll() {
        var scrollTop = $( window ).scrollTop();
        if ((scrollTop >= menu_offset_top)&&checkWidths >= 768) {
            $('.main.main-header').addClass('menu-fixed');
            $('#logo').attr('src', 'assets/images/png/logo_black.png');

        } else if (scrollTop < menu_offset_top) {
            $('.main.main-header').removeClass('menu-fixed');
            $('#logo').attr('src', 'assets/images/png/logo_white.png');
            $('.navbar-toggler-icon').css("background-image: url(../images/svg/menu.svg)");
        }
    }
    $(window).scroll(function() {
        processScroll();
    });


    //OWL elements 

    var owl_items_options;  
    owl_items_options = 5;

    $(".owl-carousel-options").owlCarousel({
        items: owl_items_options,
        //responsiveClass:true,
        loop: true,
        nav: true,
        navElement: true,
        dots: false,
        margin: 15,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: true,
        navText: ['<i class="la la-arrow-circle-o-left la-3x"></i>',
                  '<i class="la la-arrow-circle-o-right la-3x"></i>'],
    });

    $(".owl-stage-outer").children(".owl-nav").removeClass(".disabled");

    $('.quantity').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
});