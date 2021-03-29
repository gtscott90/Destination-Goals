// Requiring path to so we can use relative routes to our HTML files

var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const userMilestones = require("../models/userMilestones");

module.exports = function(app) {

  app.get(["/", "/signup"], function(req, res) {
    // If the user already has an account send them to the goals page
    if (req.user) {
      res.redirect("/login")
    }
    res.render("register"); 
  });
 

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the goals page
    if (req.user) {
      res.redirect("/goals/" + req.user.id);
    }
    res.render("login", {
      style: 'login.css'
    }); 
  });



app.post("/register",  isAuthenticated, function(req, res) {
    res.redirect("/login");
  });

app.get("/firstlogin", isAuthenticated, function(req, res) {
    console.log(req.user)
    db.Goals.findAll()
    .then(goals => {
       res.render("index", {goals: goals} ) 
    })
  });

  app.get("/goals/:id", isAuthenticated, function(req, res) {
    console.log(req.user)
    db.UserGoal.findAll({
      where: {
        UserId: req.user.id
      },
      limit: 1,
      order: [ [ 'createdAt', 'ASC' ]],
    }).then(response => {
      if (!response) {
        res.redirect("/firstlogin/")
      }
      else {
        res.render("goals");
      }
    }) 
 



    ///grab (goals) that associate to that user
    ///push into the handlebars 
    //when create UserGoal
/*     .findOne({ where: { title: 'My Title' } });
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project instanceof Project); // true
  console.log(project.title); // 'My Title'
} */

    ///If UserGoal is empty send back to "/firstlogin"

  });



  app.get("/samples", function(req, res) {
    db.Goals.findAll({
    include: [
      db.milestones
    ]
    }).then(data => {
      res.json(data);
    })
  })

 app.post("/goals", isAuthenticated, function(req, res){
        db.UserGoal.create(
          {
          UserId: req.user.id, 
          GoalId: req.body.GoalId,
          frequency: req.body.frequency
        }, 
        {
          where: {
            UserId: req.user.id
          },
        })
        .then(goal =>{
          res.json(goal)
        })
      });




    //THIS IS WHERE USER INFORMATION WILL POPULATE THE CALENDAR 
    // Get request using Sequelize (db.FindAll() "where Author ID equals 2" for what GOAL user set and pull milestones
    // then - as a Promise -  have another GET request  )

  /*   db.findAll()---milestones under the chosen goal
    //front end pull (data-id: goalid from db)
    //send to handlebars 
 *////inside handlebars: for each loop block to loop through goals to pull the one selected 
 /// on each data-id goal (a href("/goals/5"))


 /////
 ///app.post("/goals")- create User Goal - used by db.goals 
   //UserId: req.user.id 
 ////in creation reference id:  UserId: req.user.id 


};








///get request to get User's data 
    //-keep track of when they start 

    //Take specific goals and use to populate their calendar 
/* What days of week can you do 
monday-false, tuesday-true
Set up handlebars to render one week at a time  */

//could hardcode calendar and then each day 


/* app.get('/members/:id', function (res, req) {
    var renderInfo = {}
    User.findAll({
        where: {
            authorId: 2
        }
    }).then(userData => {
        var activity = userData.activity
        renderInfo.user = userData
        Activies.findAll({
            where: {
                activity: activity
            }
        })
    }).then(steps => {
        renderInfo.activitySteps = steps
        res.render('member', { render_info: renderInfo })
    })
})
// frontend 
fetch('members/2')
    .then(renderInfo => {
        var mondays = document.getElementsByClassName('monday')
        var week = 0
        if(renderInfo.user.days.monday){
            document.getElementById('monday1').innerText = renderInfo.activity.steps[0]
        }
        renderInfo.activity.steps.forEach((step, index) => {
            if (renderInfo.user.days.monday) {
                mondays[week].innerText = step
            }
        })
    }) */