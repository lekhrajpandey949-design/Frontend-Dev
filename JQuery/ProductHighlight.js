$(document).ready(function () {
  $("#product-list").on("click", ".product", function (e) {
    if ($(e.target).is(".favorite")) return;
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
    if ($(this).data("stock") === "out") {
      alert("This product is currently out of stock.");
    }
  });
  $("#product-list").on("mouseenter", ".product", function () {
    $(this).find(".details").slideDown(150);
  }).on("mouseleave", ".product", function () {
    $(this).find(".details").slideUp(150); 
  });
  $("#product-list").on("click", ".favorite", function (e) {
    e.stopPropagation(); 
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥ Favorited" : "♡ Favorite");
  });

  $(".product").each(function () {
    if ($(this).data("discount") && $(this).data("discount") > 0) {
      $(this).addClass("discount");
    }
    if ($(this).data("stock") === "out") {
      $(this).addClass("out-of-stock");
    }
  });
});
