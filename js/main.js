$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
  });

  document.querySelector(".menu-icon-wrapper").onclick = function () {
    document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
  };
});
