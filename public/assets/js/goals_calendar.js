$(document).ready(function() {

  var pathArray = window.location.pathname.split('/');
  var id = pathArray[pathArray.length - 1]
  console.log("The id is", id)

 $.get("/api/users/" + id).then(response => {
  var daysAdded = parseFloat(response.frequency)
  var events = [];
  for (let i = 0; i < response.Goal.milestones.length; i++)  {
    events.push({
      title: response.Goal.milestones[i].milestoneName,
      start: moment().add(daysAdded, 'days').format("YYYY-MM-DD")
    }); 
    daysAdded += parseFloat(response.frequency)
    console.log(daysAdded)
  }
  console.log("events are", events)
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: moment(), 
      navLinks: true, 
      editable: true,
      eventLimit: true, 
      events: events
    });
  })
})