let gallerySwiper = new Swiper('.swiper-gallery', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  grid: {
    row: 1,
  },

  spaceBetween: 50,

  navigation: {
  nextEl: '.swiper-gallery__button--next',
  prevEl: '.swiper-gallery__button--prev',
  },

  pagination: {
    el: ".swiper-gallery__pagination",
    type: 'fraction',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1600: {
      slidesPerView:3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
})
