$(document).ready(function() {

  var loginForm = $("#login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  loginForm.on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      makeErrorAlert("All fields are required!")
    }
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function(response) {
        window.location.replace("/goals/" + response.id);
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    console.log(err)
    $("#alert").fadeIn(500);
    makeErrorAlert("Please try again")
  }

  function makeErrorAlert(message) {
    $("#alertDIV").empty()
    var alertDIV = $("<div>").addClass("alert alert-warning").attr("role", "alert").text(message);
    $("#alertDIV").append(alertDIV)
  }




});