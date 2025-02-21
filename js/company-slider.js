$(document).ready(function() {
  let images = $('.company-slider img');
  let loadedCount = 0;

  images.each(function() {
    $(this).on('load', function() {
      loadedCount++;
      if (loadedCount === images.length) {
        $('.company-slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
    });
    if (this.complete) {
      $(this).trigger('load');
    }
  });
});