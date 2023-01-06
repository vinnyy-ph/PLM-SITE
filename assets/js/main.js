(function($) {
    "use strict";

    $(document).on('ready', function() {


       
        var wow = new WOW({
            boxClass: 'wow', 
            animateClass: 'animated', 
            offset: 0, 
            mobile: true, 
            live: true 
        });
        wow.init();

        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

    }); 
})(jQuery); 