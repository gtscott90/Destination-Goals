// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var fs = require('fs')
var noteData = require("../db/db.json");

function getJSON() {
  return JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"))
}

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body)
    db.User.create({
/*       name: req.body.name, */
      email: req.body.email,
      password: req.body.password
    })
      .then(function(user) {
          /* res.json(user) */
        res.redirect(307, "/api/login"); 
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/signup", function(req, res) {
      console.log(req.body.email,
      req.body.password)
  });


 /*  app.post('/register',  async (req, res) => {
    //what is put after Body corresponds with "name=" field in Register
    try {
        // can hold hashedPassword in database
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        ////instead of pushing to Array, push to mySQL database
        console.log("HIIIII")
        db.User.insert({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          // password: hashedPassword 
          }).then(result => res.json(result))
          console.log(result)
          console.log(User)
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    } 
  });
  */














/*   app.post("/api/firstlogin", function(req, res) {
    db.Usergoals.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/goals");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  }); */

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Notetaker Routes
  app.get("/api/notes", function(req, res) {
    res.json(getJSON());
  });


  app.post("/api/notes", function(req, res) {
    const notes = getJSON()
    let newNote = req.body
    newNote.id = noteData.length-1
    notes.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), "UTF-8")
    res.json(newNote)
  });

  app.delete("/api/notes/:id", function(req, res) {
    const notes = getJSON()
    const id = parseInt(req.params.id)
    console.log(id)
    const filteredNotes = notes.filter(note => note.id !== id)
    console.log(filteredNotes)
    fs.writeFileSync("./db/db.json", JSON.stringify(filteredNotes), "UTF-8")
    res.sendStatus(200)
  })
};











/* 
app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    ///THIS IS FOR ASKING THE INITIAL QUESTIONS 
    //

    res.render("../views/index.handlebars"), { burger_data: burgerData };
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    //THIS IS WHERE USER INFORMATION WILL POPULATE THE CALENDAR 
    // Get request using Sequelize (db.FindAll() "where Author ID equals 2" for what GOAL user set and pull milestones
    // then - as a Promise -  have another GET request  )
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
}; */









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
    })

 */
    // TODO: need to be attached to the models folder 
    // app.get('/api/goals/:id', (req, res) => {
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.Goals, {
    //             model: db.Goals,
    //             include: db.Milestones
    //         }]
    //     }).then(result => res.json(result))
    // })





    ///In handlebars ID in the answerspots 
    //in the public/js pulling the values that are inputted 


    //Step 1: user fills out form 
        //goal
        //frequency per week
        //how many weeks

    //Step 2 - 
//set variable USer GOALS 

///

