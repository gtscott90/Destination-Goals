$(document).ready(function() {
    // Getting references to our form and inputs
   /*  var loginForm = $("#login"); */
    var goalInput = $(".ui.dropdown").val();
    var frequencyInput = $('input[name="days"]:checked').val();
    var weeksInput = $('input[name="week"]:checked').val();

    var submitBTN = $('#submit')
    var logoutBTN = $("#logout")

    submitBTN.on("click", function(event){
        $.post("/api/goals")
        event.preventDefault();
        var userGoals = {
            goal: goalInput.val(),
            frequency: frequencyInput.val(),
            id: user.id //req.params.id//
        } 
        goalsData(userGoals.goal, userGoals.frequency, userGoals.id){
            $.post("/goals", {
                goal: goal,
                frequency: frequency,
                id: id
            }) console.log(userGoals)
            .then(function() {
                window.location.replace("/goals");
            })
            .catch(function(err) {
                console.log(err)l
            });
        }

    logoutBTN.on("click", function(event){
            $.get("/logout")
            .then(res => {window.location.href = "/login"})     
        });
});