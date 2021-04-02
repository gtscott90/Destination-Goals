$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("#register");
  var nameInput = $("input#name-input")
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.name || !userData.email || !userData.password) {
      return;
    }
    signUpUser(userData);
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(userData) {
    $.post("/api/signup", {
     userData
    })
      .then(function(data) {
        window.location.replace("/firstlogin");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

  