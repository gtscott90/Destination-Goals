var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const userMilestones = require("../models/userMilestones");

module.exports = function(app) {
  app.get(["/", "/signup"], function(req, res) {
    if (req.user) {
      res.redirect("/login")
    }
    res.render("register"); 
  });
 

  app.get("/login", function(req, res) {;
    if (req.user) {
      res.redirect("/goals/" + req.user.id);
    }
    res.render("login"); 
  });


app.post("/register",  isAuthenticated, function(req, res) {
   if (! req.user )
    res.redirect("/login");
  });

app.get("/firstlogin", isAuthenticated, function(req, res) {
    console.log(req.user)
    db.Goals.findAll()
    .then(goals => {
       res.render("index", {goals: goals} ) 
    })
  });

  app.get("/changegoal", isAuthenticated, function(req, res) {
    console.log(req.user)
    db.Goals.findAll()
    .then(goals => {
       res.render("changegoal", {goals: goals} ) 
    })
  });

  app.get("/goals/:id", isAuthenticated, function(req, res) {
    console.log(req.user)
    db.UserGoal.findOne({
      where: {
        UserID: req.params.id
      },
    }).then(response => {
      console.log(response)
      if (!response) {
        res.redirect("/firstlogin")
      }
      else {
        res.render("goals");
      }
    }) 
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
        db.UserGoal.create({
          UserId: req.user.id,
          GoalId: req.body.goalId,
          frequency: req.body.frequency
        })
        .then(goal =>{
          res.json(goal)
        })
      });


  app.post("/goals", isAuthenticated, function(req, res){
    db.UserGoal.update({
      GoalId: req.body.goalId,
      frequency: req.body.frequency
    })
    .then(goal =>{
      res.json(goal)
    })
  });

};

