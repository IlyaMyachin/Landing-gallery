let eventsSwiper = new Swiper('.swiper-events', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  pagination: {
    el: '.swiper-events__pagination',
    clickable: true,
  },

  spaceBetween: 50,

  navigation: {
  nextEl: '.swiper-events__button--next',
  prevEl: '.swiper-events__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 35,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView:3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1600: {
      slidesPerView:3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
})
