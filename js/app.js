
$(document).ready(function() {
    var colors = [ 'red', 'black']; // Colors for each string
    var currentIndex = 0;

    var typed = new Typed('#element', {
      strings: ['INSIGHT PRO AGENCY', 'DIGITAL MARKETING', 'WEB DEVELOPMENT','GRAPHICS DESIGN', 'VIDEO EDITING', 'BEST SERVICE PROVIDER'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      preStringTyped: function(arrayPos) {
        // Change color for each string
        currentIndex = arrayPos % colors.length; // Ensure the index is within bounds
        $('#element').css('color', colors[currentIndex]);
      }
    });
});






$(document).ready(function () {
    const $gallery = $('#left-gallery');

    // Click on small image to display in the main section with transition
    // Scroll functionality for arrows with smooth transition
    $('#arrow-up').on('click', function () {
        $gallery.animate({ scrollTop: $gallery.scrollTop() - 580 }, );
    });

    $('#arrow-down').on('click', function () {
        $gallery.animate({ scrollTop: $gallery.scrollTop() + 580 }, );
    });
});

$(document).ready(function () {
    const $end = $('#end-gallery');

    // Click on small image to display in the main section with transition
    // Scroll functionality for arrows with smooth transition
    $('#arrow-up-right').on('click', function () {
        $end.animate({ scrollTop: $end.scrollTop() - 580 }, );
    });

    $('#arrow-down-right').on('click', function () {
        $end.animate({ scrollTop: $end.scrollTop() + 580 }, );
    });
});


$(document).ready(function () {
    const $mainImage = $('#main-image');
  
    // Functionality for left gallery
    $('#left-gallery img').on('click', function () {
      const fullImage = $(this).data('full');
      $mainImage.attr('src', fullImage);
    });
  
    // Functionality for right gallery
    $('#end-gallery img').on('click', function () {
      const fullImage = $(this).data('full');
      $mainImage.attr('src', fullImage);
    });
});




$(document).ready(function () {
    const testimonials = $(".testimonial");
    let currentIndex = 0;

    function updateTestimonials() {
      testimonials.removeClass("active");
      testimonials.slice(currentIndex, currentIndex + 2).addClass("active");
      $("#prev").prop("disabled", currentIndex === 0);
      $("#next").prop("disabled", currentIndex + 2 >= testimonials.length);
    }

    $("#prev").click(function () {
      if (currentIndex > 0) {
        currentIndex -= 2;
        updateTestimonials();
      }
    });

    $("#next").click(function () {
      if (currentIndex + 2 < testimonials.length) {
        currentIndex += 2;
        updateTestimonials();
      }
    });

    updateTestimonials();
});


$('#togglerButton').on('click', function () {
    $('#sidePanel').addClass('open');
});

// Close the side panel
$('#closeButton').on('click', function () {
    $('#sidePanel').removeClass('open');
});

// Toggle Sub-Menus
$('.side-panel ul li > a').on('click', function (e) {
  // যদি এই লিংকের পরবর্তী সাব-মেনু থাকে, কেবল তখনই ডিফল্ট ইভেন্ট বন্ধ করুন
  if ($(this).siblings('.sub-menu').length > 0) {
      e.preventDefault();
      $(this).siblings('.sub-menu').slideToggle();
  }
});


$(document).ready(function () {
    $(window).on('scroll', function () {
        
        var scrollTop = $(window).scrollTop();
        var opacity = 1 - (scrollTop / 500);
        if (opacity < 0.2) opacity = 0.2; 
        $('#sidebar').css('opacity', opacity);
    });
});
  
