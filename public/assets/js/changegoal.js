$(document).ready(function() {

    var pathArray = window.location.pathname.split('/');
    var userId = pathArray[pathArray.length - 1]

    var submitBTN = $('#submit')
    var logoutBTN = $("#logout")

    submitBTN.on("click", function(event){
        event.preventDefault();
    var frequencyInput = $('input[name="days"]:checked').val();
    var goalId = $(".menu .active").attr("data-id");
    console.log("The third value is freq input", userId, goalId, frequencyInput)
    var userGoals = {
        userId: userId,
        goalId: goalId, 
        frequency: frequencyInput
    }
    $.post("/goals", userGoals) 
        .then(function(response) {
            if (response){
                console.log(response)
                window.location.replace("/goals/" + response.UserId);
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