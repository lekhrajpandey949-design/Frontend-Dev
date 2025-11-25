$(document).ready(function () {
  function timeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning!";
    if (hour >= 12 && hour < 17) return "Good Afternoon!";
    return "Good Evening!";
  }
  const $greetingText = $("#greeting-text");
  $greetingText.text(timeBasedGreeting());
  $greetingText.on("click", function () {
    alert("Hello! Hope you have a great day!");
  });

  $("#change-greeting-btn").on("click", function () {
    $greetingText.text("Believe you can and you're halfway there. — Theodore Roosevelt");
  });
  $("#toggle-welcome-btn").on("click", function () {
    $("#welcome-message").toggle();
  });
});
