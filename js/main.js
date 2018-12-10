$(document).ready(function () {

    // Light Gallery
    $("#lightgallery").lightGallery();


    // Nav Background, Size
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 120) {
            $('nav').addClass('nav-bg');
            $('.fa-school').addClass('nav-small');
            $('.nav-item').addClass('nav-small');
            $('.navbar-brand').addClass('nav-small');

        } else if ($('nav').hasClass('nav-bg')) {
            $('nav').removeClass('nav-bg');
            $('.fa-school').removeClass('nav-small');
            $('.nav-item').removeClass('nav-small');
            $('.navbar-brand').removeClass('nav-small');
        }
    });

    if ($('nav').offset().top >= 120) {
        $('nav').addClass('nav-bg');
        $('.fa-school').addClass('nav-small');
        $('.nav-item').addClass('nav-small');
        $('.navbar-brand').addClass('nav-small');
    }


    // Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        updateURL: false
    });

});