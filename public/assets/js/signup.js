$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("#register");
  var nameInput = $("input#name-input")
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var confirmpasswordInput =$("input#confirmpasswordInput");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    var confirm = confirmpasswordInput.val().trim()
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/;  
    if (!userData.name || !userData.email || !userData.password || !confirm) {
      makeErrorAlert("All fields are required!")
    } else if (userData.password !== confirm) {; 
       passwordInput.val("");
       confirmpasswordInput.val("");
       makeErrorAlert("Passwords must match!");
    } else if(!userData.password.match(paswd)){
      passwordInput.val("");
      confirmpasswordInput.val("");
      makeErrorAlert("Passwords must be 7 or more characters with a number and a special character");
    } else {
      signUpUser(userData);
      nameInput.val("");
      emailInput.val("");
      passwordInput.val("");
      confirmpasswordInput.val("");
    }
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
    console.log(err)
    $("#alert").fadeIn(500);
    makeErrorAlert("Already a User")
  }

  function makeErrorAlert(message) {
    $("#alertDIV").empty()
    var alertDIV = $("<div>").addClass("alert alert-warning").attr("role", "alert").text(message);
    $("#alertDIV").append(alertDIV)
  }


});

  