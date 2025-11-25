$(document).ready(function () {
  $("#directory").on("click", ".manager", function () {
    const $team = $(this).closest(".team");
    $team.find(".employee").addClass("highlight");
    setTimeout(() => $team.find(".employee").removeClass("highlight"), 2000);
  });
  $("#directory").on("mouseenter", ".employee", function () {
    $(this).find(".contact").show();
  }).on("mouseleave", ".employee", function () {
    $(this).find(".contact").hide();
  });
  $("#directory").on("click", ".team", function (e) {
    if ($(e.target).is(".employee") || $(e.target).is(".manager")) return;

    $(this).children().css("background-color", "#faf0e6");
    setTimeout(() => $(this).children().css("background-color", ""), 2000);
  });
  $("#random-employee-btn").on("click", function () {
    const $allEmployees = $("#directory .employee");
    const randomIndex = Math.floor(Math.random() * $allEmployees.length);
    const $selected = $allEmployees.eq(randomIndex);
    $selected.addClass("highlight");
    $selected.siblings(".employee").addClass("highlight");
    setTimeout(() => $("#directory .employee").removeClass("highlight"), 2000);
  });
  $("#collapse-team-btn").on("click", function () {
    $("#directory .team").each(function () {
      $(this).find(".employee").slideToggle(200);
    });
  });
});
