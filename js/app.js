(function () {
  $(window).scroll(function () {
    var distanceY = window.pageYOffset || $(document).scrollTop(),
      shrinkOn = 100;

    if (distanceY > shrinkOn) {
      $('.navbar').addClass('shrink');
    } else {
      $('.navbar').removeClass('shrink');
    }
  });

})();
