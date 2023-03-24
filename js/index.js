new Swiper('.hero__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.hero__slider-btn_next',
    prevEl: '.hero__slider-btn_prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    560: {
      spaceBetween: 8,
    },
  },
});
