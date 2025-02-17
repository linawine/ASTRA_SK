$(document).ready(function(){

    function initSlick() {
        $('.vacancy__slider').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
        });
      }
  
      function destroySlick() {
        $('.vacancy__slider').slick('unslick');
      }
  
      function checkScreenWidth() {
        if ($(window).width() < 767) {
          if (!$('.vacancy__slider').hasClass('slick-initialized')) {
            initSlick();
          }
        } else {
          if ($('.vacancy__slider').hasClass('slick-initialized')) {
            destroySlick();
          }
        }
      }

    checkScreenWidth();
    $(window).on('resize', checkScreenWidth);

    $('.vacancy__slider .vacancy__slide:first-child').addClass('active');
    $('#block1').show().removeAttr('aria-hidden').removeAttr('inert');
    $('#block1').focus(); 

    $('.vacancy__slider').on('click', '.slick-slide', function(event) {
        event.stopPropagation();
        var targetBlockId = $(this).data('target');

        $('.vacancy__slider .vacancy__slide').removeClass('active');

        $(this).addClass('active');

        $('.hidden-block').hide().attr('aria-hidden', 'true').attr('inert', '');

        $(targetBlockId).show().removeAttr('aria-hidden').removeAttr('inert');

        $(targetBlockId).focus();
      });

      $('.vacancy__slide').attr('tabindex', '0');
});
