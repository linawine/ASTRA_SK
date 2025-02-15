$(function() {
  $('.object-slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });

  $(".filter li").on('click', function(){
    // Сброс выделения у всех элементов
    $(".filter li").removeClass('active');

    // Выделение текущего элемента
    $(this).addClass('active');

    var filter = $(this).data('filter');
    $(".object-slider").slick('slickUnfilter');

    if(filter == 'commerce'){
      $(".object-slider").slick('slickFilter','.commerce');
    } else if(filter == 'lowrise'){
      $(".object-slider").slick('slickFilter','.lowrise');
    } else if(filter == 'all'){
      $(".object-slider").slick('slickUnfilter');
    }
  });
});