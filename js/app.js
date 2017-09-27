(function () {
  // Navbar animation
  $(window).scroll(function () {
    const distanceY = window.pageYOffset || $(document).scrollTop(),
      shrinkOn = 100;

    if (distanceY > shrinkOn) {
      $('.navbar').addClass('shrink');
    } else {
      $('.navbar').removeClass('shrink');
    }
  });

  // Fluidbox instance
  $('.grid-item').fluidbox({
    viewportFill: 0.79
  });

  // Lazyload options
  // tbdefined
})();
