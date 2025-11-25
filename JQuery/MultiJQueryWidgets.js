(function ($v1) {
  if (!$v1) return; // safety check
  $v1(document).ready(function () {
    let i = 0;
    setInterval(function () {
      const boxes = $v1("#carousel-widget");
      boxes.toggleClass("active");
      i++;
    }, 3000);
  });
})(window.jq1);
$(document).ready(function () {
  $("#modal-widget").on("click", function () {
    alert("This is a modal-like notification (handled by jQuery v3).");
  });
  $("#other-widget").hover(function () {
    const $tip = $("<div class='tooltip'>Tooltip info</div>").css({
      position: "absolute",
      top: $(this).offset().top + $(this).outerHeight(),
      left: $(this).offset().left,
      padding: "6px",
      border: "1px solid #ccc",
      background: "#fff"
    }).appendTo("body");
    $(this).data("tooltip", $tip);
  }, function () {
    const $t = $(this).data("tooltip");
    if ($t) $t.remove();
  });
});
