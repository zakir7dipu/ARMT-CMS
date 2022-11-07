(function ($) {
    "use script";
    /* sticky navbar */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky')
        }
    });
    // dropdown
    $(".dropdown-button").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $(".dropdown-trigger").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    // accessible
    $('.accessible-light').on('click', () => {
        if ($('body').hasClass("grey")) {
            $('body').removeClass("grey lighten-1")
        } else {
            $('body').addClass("grey lighten-1")
        }

    })
    // mobile menu
    $('.sidenav').sidenav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    });
    // carousel
    $('.carousel.carousel-slider').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 100,
    });
    $('.carousel').carousel({
        dist: 0,
        padding: 0,
        // fullWidth: true,
        indicators: true,
        duration: 100,
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
    
    // materialboxed
    $('.materialboxed').materialbox();
    
    // filter gallery 
    $(".filters ul li").click(function () {
        $(".filters ul li").removeClass("active");
        $(this).addClass("active");
      
        var data = $(this).attr("data-filter");
        $grid.isotope({
          filter: data
        });
      });
      
      var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all"
        }
      });
      
    // preloader
    $(window).on('load', ()=> {
        setTimeout(() => {
            $('.loader').addClass("hide")
        }, 1000);
    })


})(jQuery);