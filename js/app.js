$(document).ready(function () {
  //HERO SLIDER
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  //PROJECT SLIDER
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    margin:24,
    responsive: {
      0: {},
      768: {
        items: 2,
      },
      1140: {
        items: 2,
      },
    },
  });
});



