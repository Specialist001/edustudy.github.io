$(document).ready(function () {
    var menu_offset_top = $('.main-header').outerHeight();
    var checkWidths = jQuery(window).width();
    function processScroll() {
        var scrollTop = $( window ).scrollTop();
        if ((scrollTop >= menu_offset_top)&&checkWidths >= 768) {
            $('.main-header').addClass('menu-fixed');
            $('#logo').attr('src', 'assets/images/png/logo_black.png');

        } else if (scrollTop <= menu_offset_top) {
            $('.main-header').removeClass('menu-fixed');
            $('#logo').attr('src', 'assets/images/png/logo_white.png');
        }
    }
    $(window).scroll(function() {
        processScroll();
    });
});