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
    340: {
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

const swiperTesti = new Swiper(".swiper-testimonial", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-testimonial-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-testimonal-next",
    prevEl: ".swiper-testimonal-prev",
  },
});

$(".owl-carousel").owlCarousel({
  items: 1,
  merge: true,
  loop: true,
  margin: 0,
  video: true,
  lazyLoad: true,
  center: true,
  responsive: {
    480: {
      items: 2,
    },
    600: {
      items: 4,
    },
  },
});
