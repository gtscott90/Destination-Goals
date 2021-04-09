var db = require("../models");
var passport = require("../config/passport");
var fs = require('fs')
var noteData = require("../db/db.json");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const user = require("../models/user");

function getJSON() {
  return JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"))
}

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), /* {
    failureFlash: true,
    failureRedirect: '/login',
  }), */ function (req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function (req, res) {
    db.User.create(req.body.userData)
      .then(function (user) {
        res.redirect("/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/signup", function (req, res) {
    console.log(req.body.email,
      req.body.password)
  });


  app.get("/post", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/goals");
    }
    res.redirect("/");
  });

  app.get("/api/users/:id", isAuthenticated, function (req, res) {
    db.UserGoal.findOne({
      where: {
        UserId: req.params.id
      }, order: [
        ["createdAt", "DESC"]
      ],
      limit: 1,
      include: [
        db.User, {
          model: db.User,
          attributes: ["name"]
        },
        db.Goals, {
          model: db.Goals,
          include: db.milestones
        }
      ]
    }).then(results => {

      console.log(results)
      res.json(results)

    }).catch(err => res.send(err))
  })

  app.post("/api/goals", isAuthenticated, function (req, res) {
    console.log(req.body)
    console.log(req.user)
    db.Goals.create(req.body)
      .then(function () {
        res.redirect(307, "/goals");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });

  app.post("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Notetaker routes
  app.get("/api/notes", function (req, res) {
    res.json(getJSON());
  });

  app.post("/api/notes", function (req, res) {
    const notes = getJSON()
    let newNote = req.body
    newNote.id = noteData.length - 1
    notes.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), "UTF-8")
    res.json(newNote)
  });

  app.delete("/api/notes/:id", function (req, res) {
    const notes = getJSON()
    const id = parseInt(req.params.id)
  /*   console.log(id) */
    const filteredNotes = notes.filter(note => note.id !== id)
    console.log(filteredNotes)
    fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes), "UTF-8")
    res.sendStatus(200)
  })
};

