$(document).ready(function () {
    
    /*$('.feature').matchHeight();*/

$(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // Menu overlay
 

    var $overlay_container = $(".overlay-container");

    $(".js-overlay-button").click(function(){
        var overlay_id;
        
        overlay_id=$(this).data("overlay-target");
        
        $overlay_container.addClass("active");
        $overlay_container.find('.overlay').removeClass('active');
        $overlay_container.find('[data-overlay="' + overlay_id + '"]').addClass('active');
        
        $('body').addClass('overlay-open');

        
        
    });

    $(".js-overlay-close").click(function(){
        $overlay_container.removeClass('active');
        $overlay_container.find('.overlay').removeClass('active');
        
        $('body').removeClass('overlay-open');
        
    });


    
    
    var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    }
});
wow.init();
    
    
}); // END ONREADY  

