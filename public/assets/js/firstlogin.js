$(document).ready(function() {
    // Getting references to our form and inputs
   /*  var loginForm = $("#login"); */
    var frequencyInput = $('input[name="days"]:checked').val();

    var submitBTN = $('#submit')
    var logoutBTN = $("#logout")

    submitBTN.on("click", function(event){
        event.preventDefault();
        var goalId = $(".menu .active").attr("data-id");
        var userGoals = {
            goalId: goalId
        } 
  
        $.post("/goals", userGoals) 
            .then(function(goals) {
                if (goals.id){
                    window.location.replace("/goals");
                } 
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