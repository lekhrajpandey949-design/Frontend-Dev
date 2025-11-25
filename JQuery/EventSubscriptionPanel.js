$(document).ready(function () {
  const $message = $("#message");
  $("#subscriptions").on("click", ".subscribe", function () {
    const topic = $(this).closest(".topic").data("topic");
    $(this).prop("disabled", true);
    $(this).siblings(".unsubscribe").prop("disabled", false);
    showSuccess(`Subscribed to ${topic}. Notifications enabled.`);
  });
  $("#subscriptions").on("click", ".unsubscribe", function () {
    const topic = $(this).closest(".topic").data("topic");
    $(this).prop("disabled", true);
    $(this).siblings(".subscribe").prop("disabled", false);
    showSuccess(`Unsubscribed from ${topic}. Notifications disabled.`);
  });
  function showSuccess(text) {
    const $note = $("<div>").addClass("success").text(text);
    $message.empty().append($note);
    setTimeout(() => $note.fadeOut(400, function () { $(this).remove(); }), 2500);
  }
  $("#add-topic-btn").on("click", function () {
    const newTopic = $("#new-topic-input").val().trim();
    if (!newTopic) return showSuccess("Please enter a topic name.");
    const $topic = $(`
      <div class="topic" data-topic="${newTopic}">
        <span>${newTopic}</span>
        <button class="subscribe">Subscribe</button>
        <button class="unsubscribe">Unsubscribe</button>
      </div>
    `);
    $("#dynamic-topics").append($topic);
    $("#new-topic-input").val("");
    showSuccess(`Topic "${newTopic}" added.`);
  });
  $("#remove-topic-btn").on("click", function () {
    const $topic = $("#subscriptions .topic").filter('[data-topic="offers"]');
    if ($topic.length) {
      $topic.off();
      $topic.remove();
      showSuccess("Removed 'offers' topic.");
    } else {
      showSuccess("'offers' topic not found.");
    }
  });
});
