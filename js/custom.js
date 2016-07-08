(function ($) {
    
    // Sticky Header
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".srvs-hero-h").addClass('srvs-nav-h');
        } else {
            $(".srvs-hero-h").removeClass('srvs-nav-h');
        }
    });
    $(window).load(function() {
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

    
    //Carousel Customization
    var carousel = $("#carousel-tech");

    carousel.owlCarousel({
        autoPlay:true,
        itemsCustom : [
            [0, 3],
            [450, 4],
            [600, 5],
            [700, 6],
            [1000, 8],
            [1200, 9],
            [1400, 12],
            [1600, 14]
        ],
        navigation:false,
        pagination:false
    })

    $("#next-btn").click(function(){
        carousel.trigger('owl.next');
    })
    $("#prev-btn").click(function(){
        carousel.trigger('owl.prev');
    })



    //isotope customization
    var $portfolio = $('.portfolio');

    $portfolio.isotope({
                  itemSelector : '.caso',
                  layoutMode : 'masonry'
                  
                });

    var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');


    $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $portfolio.isotope( options );
        }
        
        return false;
    });



})(jQuery);
