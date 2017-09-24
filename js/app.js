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
})();
