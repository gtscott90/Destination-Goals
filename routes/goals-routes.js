// Requiring path to so we can use relative routes to our HTML files
const { notEqual } = require("assert");
const { time } = require("console");
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the goals page
    if (req.user) {
      res.redirect("/goals");
    }
    res.render("../views/register.handlebars"); 
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the goals page
    if (req.user) {
      res.redirect("/firstlogin");
    }
    res.render("../views/login.handlebars"); 
  });

  app.get("/signup", function(req, res){
    res.render("../views/register.handlebars")
  })

  app.post("/signup", function(req, res){
    res.render("../views/index.handlebars")
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
/*   app.get("/signup", function(req, res) {
    res.render("../views/register.handlebars");
  }); */


/*   app.post("/register", isAuthenticated, function(req, res) {
    res.redirect("/firstlogin");
  });
 */
  app.get("/firstlogin", function(req, res) {
    res.render("../views/index.handlebars");
  });


  app.get("/goals", /* isAuthenticated, */ function(req, res) {
    res.render("../views/goals.handlebars");
  });

  app.get("/goals:id", function(req, res) {
     //// app.get(/goals:id)
 /////get ID from front end and search by db.findOne;
 ////////req.params.id
    var renderInfo = {}
    Goals.findOne({
        where: {
            goalId: req.params.id
        }
   /*  }).then(userData => {
        var milestones = userData.milestones
        renderInfo.user = userData
        Milestones.findAll({
            where: {
                goal_id: req.param.id
            }
        })
    }).then(steps => {
        renderInfo.activitySteps = steps
        res.render('goals', { render_info: renderInfo })
    }) */
})
  });

  app.post("/goals", function(req, res){
    db.Goals.create({
  
            goalName: req.body.goalName,
            frequency: req.body.frequency,
            userId: req.user.id 
          })
            .then(function(goals) {
             
            })
            .catch(function(err) {
             
            });
        });
  })



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