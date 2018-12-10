$(document).ready(function () {

    // Light Gallery
    $("#lightgallery").lightGallery();


    // Nav Background
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 120) {
            $('nav').addClass('nav-bg');

        } else if ($('nav').hasClass('nav-bg')) {
            $('nav').removeClass('nav-bg');
        }
    });

    if ($('nav').offset().top >= 120) {
        $('nav').addClass('nav-bg');
    }


    // Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]');

});