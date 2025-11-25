$(document).ready(function () {
  const $posts = $("#posts");
  $("#add-post").on("click", function () {
    const title = $("#post-title").val().trim();
    const body = $("#post-body").val().trim();
    if (!title && !body) {
      alert("Please enter a title or body.");
      return;
    }
    const $new = $(`<article class="post">${title ? "<h4>" + title + "</h4>" : ""}<p>${body}</p></article>`);
    $posts.append($new);
    $("#post-title,#post-body").val("");
  });
  $("#prepend-post").on("click", function () {
    const $feat = $(`<article class="post featured"><h4>Featured Post</h4><p>Highlights and important announcements.</p></article>`);
    $posts.prepend($feat);
  });
  $("#remove-last").on("click", function () {
    $posts.children().last().remove();
  });
  const $first = $posts.children().first();
  $first.before('<div class="tag">Tag: News</div>');
  $posts.children().last().after('<div class="tag">Tag: Archive</div>');
  function highlightKeyword(keyword) {
    $posts.children(".post").each(function () {
      const text = $(this).text().toLowerCase();
      if (keyword && text.indexOf(keyword.toLowerCase()) !== -1) {
        $(this).css("border", "2px solid #f90");
      } else {
        $(this).css("border", "");
      }
    });
  }
  highlightKeyword("tips");
});
