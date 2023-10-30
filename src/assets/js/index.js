const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const swiper2 = new Swiper(".swiper-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 300,
  grabCursor: true,
  parallax: true,
  spaceBetween: 10,

  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-next",
  //   prevEl: ".swiper-prev",
  // },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
