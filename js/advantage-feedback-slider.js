$(document).ready(function () {
    $('.advantage-feedback__slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrow: true,
        slidesToScroll: 2,
        rows: 2,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    });
});