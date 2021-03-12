$(document).ready(function() {
/*   $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  }); */


 var pathArray = window.location.pathname.split('/');

  var id = pathArray[pathArray.length - 1]
  console.log("The id is", id)

  $.get("/api/users/" + id).then(response => {
    console.log("The user profile is", response.Goal.goalName)
  console.log("Milestone 1 is", response.Goal.milestones[0].milestoneName)
  console.log("Milestone 1 is", response.frequency)
  console.log("Milestone 1 is", response.createdAt)
    console.log("Milestone 1 is", response)
  /*    var events = [];
    for (i = 0; i < response; i++)  {
      events.push({
        title: response.Goal.milestones[i].milestoneName,
        start: response.Goal.createdAt,
        end: response.Goal.updatedAt
      }); console.log(events)
    }
 */
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: moment(), /// Variable to call Moment to grab current date 
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, 
      events: events
    });
  });

});