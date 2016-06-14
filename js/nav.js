(function ($) {
    
    // Sticky Header
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".srvs-hero-h").addClass('srvs-nav-h');
        } else {
            $(".srvs-hero-h").removeClass('srvs-nav-h');
        }
    });

    // Mobile Navigation
    $('.mobile-toggle').click(function() {
        $('.srvs-hero-h').toggleClass('open-nav');
    });

    $('.srvs-hero-h li a').click(function() {
        if ($('.srvs-hero-h').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.srvs-hero-h').removeClass('open-nav');
        }
    });

    // Navigation Scroll - ljepo radi materem
    $('nav a').click(function(event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });
})(jQuery);

(function($){

})(jQuery)