$(document).ready(function() {
    // Getting references to our form and inputs
   /*  var loginForm = $("#login"); */
    var goalInput = $(".ui.dropdown").val();
    var frequencyInput = $('input[name="days"]:checked').val();

    var submitBTN = $('#submit')
    var logoutBTN = $("#logout")

    submitBTN.on("click", function(event){
        event.preventDefault();
        var userGoals = {
            goalName: goalInput.val(),
            frequency: frequencyInput.val(),
        } 
        $.post("/goals", userGoals) 
            .then(function() {
                window.location.replace("/goals");
            })
            .catch(function(err) {
                console.log(err)
            });
        });

    logoutBTN.on("click", function(event){
            $.get("/logout")
            .then(res => {window.location.href = "/login"})     
        });
});