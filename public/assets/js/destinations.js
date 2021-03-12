$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page



      
      // allow "more" link when too many events
      ///AJAX Call to populate with API data 
      //week 6 - activity 2
      // get back variables and fill in calendar with response data

      /* 
        const queryURL = ("/api/goals:id")
       $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.milestoneName);
        console.log(response.frequency)
      }); */

     /*  //response.Goals.milestones[0].milestoneName

      
  
       events: [
        {
          title: 'whatever',//milestoneName
          start: '2021-03-01' /// moment() + inverse of frequency (7aweek = +1, 1aweek = +7)
                                // if 
        },
        {
          title: 'Intro to HTML',
          start: '2021-02-04',
          end: '2021-03-04' /// inverse of frequency + previous start 
        },
        {
          title: 'Advanced HTML',
          start: '2021-03-06',
          end: '2021-03-06'
        },
        {
          id: 999,
          title: 'Intro to CSS',
          start: '2021-03-09'
        },
        {
          id: 999,
          title: 'CSS Layouts',
          start: '2021-02-16'
        },
        {
          title: 'Intro to Javascript',
          start: '2021-02-11',
          end: '2021-02-13'
        },
        {
          title: 'Variables and Functions',
          start: '2021-02-18T10:30:00',
          end: '2021-02-18T12:30:00'
        },
        {
          title: 'Objects and the DOM',
          start: '2021-02-19'
        },
        {
          title: 'Uploading to GitHub',
          start: '2021-02-22T14:30:00'
        },
        {
          title: 'Publishing your page',
          start: '2021-02-24T17:30:00'
        }
      ]
    }); 

  });
*/










    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });
  });



  