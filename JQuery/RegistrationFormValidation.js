$(document).ready(function () {
  const existingEmails = ["a@example.com", "user@test.com"]; 
  const $form = $("#register-form");
  const $name = $("#name");
  const $email = $("#email");
  const $password = $("#password");
  const $msg = $("#form-message");

  function resetErrors() {
    $name.removeClass("invalid");
    $email.removeClass("invalid");
    $password.removeClass("invalid");
    $msg.empty();
  }

  function showError(input, text) {
    input.addClass("invalid");
    $msg.append($("<div>").addClass("error").text(text));
  }

  $form.on("submit", function (e) {
    e.preventDefault(); 
    resetErrors();

    let valid = true;
    if ($.trim($name.val()) === "") {
      showError($name, "Name cannot be empty.");
      valid = false;
    }
    const emailVal = $.trim($email.val());
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
      showError($email, "Please enter a valid email address.");
      valid = false;
    } else if (existingEmails.indexOf(emailVal.toLowerCase()) !== -1) {
      showError($email, "This email is already registered.");
      valid = false;
    }
    if ($password.val().length < 8) {
      showError($password, "Password must be at least 8 characters long.");
      valid = false;
    }
    if (valid) {
      $msg.append($("<div>").addClass("success").text("Registration successful!"));
      existingEmails.push(emailVal.toLowerCase());
      $form[0].reset();
    }
  });
  $email.on("blur", function () {
    const val = $.trim($(this).val()).toLowerCase();
    if (existingEmails.indexOf(val) !== -1) {
      $(this).addClass("invalid");
    } else {
      $(this).removeClass("invalid");
    }
  });

});
