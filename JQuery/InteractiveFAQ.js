$(document).ready(function () {
  $("#faq").on("click", ".question", function () {
    $(this).next(".answer").slideToggle(150);
  });
  $("#faq").on("mouseenter", ".question", function () {
    $(this).css("color", "#0077cc");
  }).on("mouseleave", ".question", function () {
    $(this).css("color", "");
  });
  $("#faq").on("dblclick", ".question", function () {
    $(".answer").slideUp(150);
  });
  $("#faq").on("focus", ".answer-input", function () {
    $(this).closest(".faq-item").find(".question").addClass("focused");
  });
  $("#faq").on("blur", ".answer-input", function () {
    $(this).closest(".faq-item").find(".question").removeClass("focused");
  });
});
