let projectsSwiper = new Swiper('.swiper-projects', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  maxBackfaceHiddenSlides: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  spaceBetween: 49.5,

  navigation: {
  nextEl: '.swiper-projects__button--next',
  prevEl: '.swiper-projects__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 21,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1600: {
      slidesPerView:3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
})
