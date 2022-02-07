var swiper = null;
var mediaQuerySize = 769;

function catalogSliderInit () {
  if (!swiper) {
    var swiper = new swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
  }
}

function catalogSliderDestroy () {
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
}

$(window).on('load resize', function () {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();
  
  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy()
  }
});