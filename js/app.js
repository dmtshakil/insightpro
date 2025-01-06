
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


// $('#togglerButton').on('click', function () {
//     $('#sidePanel').addClass('open');
// });

// // Close the side panel
// $('#closeButton').on('click', function () {
//     $('#sidePanel').removeClass('open');
// });

// // Close the side panel when clicking outside
// $(document).on('click', function (e) {
//     if (!$(e.target).closest('#sidePanel, #togglerButton').length) {
//         $('#sidePanel').removeClass('open');
//     }
// });  



$('#togglerButton').on('click', function () {
    $('#sidePanel').addClass('open');
});

// Close the side panel
$('#closeButton').on('click', function () {
    $('#sidePanel').removeClass('open');
});

// Toggle Sub-Menus
$('.side-panel ul li > a').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.sub-menu').slideToggle();
});

// Close the side panel when clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).closest('#sidePanel, #togglerButton').length) {
        $('#sidePanel').removeClass('open');
    }
});
  
