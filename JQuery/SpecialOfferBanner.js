$(document).ready(function () {
  const $banners = $("#banners .banner");
  $("#hide-btn").on("click", function () {
    $banners.filter('[data-banner="2"]').hide();
  });
  $("#show-btn").on("click", function () {
    $banners.filter('[data-banner="2"]').show();
  });
  $("#slide-toggle-btn").on("click", function () {
    $banners.slideToggle(300);
  });
  $("#fade-toggle-btn").on("click", function () {
    $banners.fadeToggle(300);
  });
  let currentIndex = 0;
  function rotateBanners() {
    $banners.stop(true, true).fadeOut(300);
    $banners.eq(currentIndex).fadeIn(400);
    currentIndex = (currentIndex + 1) % $banners.length;
  }
  rotateBanners();
  setInterval(rotateBanners, 5000);
});
