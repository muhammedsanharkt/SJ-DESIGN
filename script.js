
  $(document).ready(function() {
    $('.mobilenavlinks').hide();
    $('.hamburger').click(function() {
      $('.mobilenavlinks').slideToggle();
       // Toggle visibility with animation
       
    });

    // Optional: Close menu when a mobile link is clicked
    $('.mobilenavlinks .links').click(function() {
      $('.mobilenavlinks').slideUp();
    });
    

    
    // Animate About Me section on scroll into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).on("scroll", function() {
        if (isScrolledIntoView(".aboutme")) {
            $(".aboutme").addClass("fade-in");
        }
    });

    // Hover animation for stats
    $(".stats").hover(
        function() {
            $(this).css({"transform": "scale(1.05)", "transition": "0.3s ease"});
        },
        function() {
            $(this).css({"transform": "scale(1)"});
        }
    );




    


  });