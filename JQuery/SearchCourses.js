$(document).ready(function () {
  const $input = $("#search-input");
  const $courses = $("#courses-list .course");
  const $count = $("#match-count");
  $input.on("keyup", function () {
    const query = $(this).val().trim().toLowerCase();
    let matches = 0;

    $courses.each(function () {
      const text = $(this).text();
      const lower = text.toLowerCase();

      if (query === "") {
        $(this).html(text).removeClass("matched").show();
      } else if (lower.indexOf(query) !== -1) {
        const start = lower.indexOf(query);
        const before = text.slice(0, start);
        const matchText = text.slice(start, start + query.length);
        const after = text.slice(start + query.length);
        $(this).html(`${before}<span class="match">${matchText}</span>${after}`);
        $(this).addClass("matched").show();
        matches++;
      } else {
        $(this).hide();
      }
    });
    $count.text(`Matches: ${matches}`);
  });
  $("#clear-search").on("click", function () {
    $input.val("");
    $courses.show().each(function () {
      $(this).text($(this).text());
    });
    $count.text("Matches: " + $courses.length);
  });
});
