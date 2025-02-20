$(function () {

  $(".furniture-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });

  $(".filter li").on('click', function () {
    $(".filter li").removeClass('active');

    $(this).addClass('active');

    var filter = $(this).data('filter');
    $(".furniture-slider").slick('slickUnfilter');

    if (filter == 'school') {
      $(".furniture-slider").slick('slickFilter', '.school');
    } else if (filter == 'education') {
      $(".furniture-slider").slick('slickFilter', '.education');
    } else if (filter == 'office') {
      $(".furniture-slider").slick('slickFilter', '.office');
    } else if (filter == 'medical') {
      $(".furniture-slider").slick('slickFilter', '.medical');
    }

  });

});
