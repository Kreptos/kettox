const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1025: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});