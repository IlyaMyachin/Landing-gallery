let projectsSwiper = new Swiper('.swiper-projects', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  spaceBetween: 50,

  navigation: {
  nextEl: '.swiper-projects__button--next',
  prevEl: '.swiper-projects__button--prev',
  },

  breakpoints: {
    320: {
      centerInsufficientSlides: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
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
