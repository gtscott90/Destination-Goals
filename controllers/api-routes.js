var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

function checkAuthenticated(req, res, next){
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/login')
    }
    
function checkNotAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return res.redirect('/')
        }
        next()
        }

app.get('/login', checkNotAuthenticated, (req, res) => {
        res.render('login.handlebars')
    });
    
    app.post('/login', checkNotAuthenticated, passport.authenticate('local', 
      {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }))
    
    app.get('/register', checkNotAuthenticated, (req, res) => {
        res.render('register.handlebars')
    })
    
    app.post('/register', checkNotAuthenticated, async (req, res) => {
        //what is put after Body corresponds with "name=" field in Register
        try {
            // can hold hashedPassword in database
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            ////instead of pushing to Array, push to mySQL database
            db.User.create({
                email: req.body.email,
                password: req.body.password
              })
              .then(function() {
                res.redirect('/login');
              })
        } catch {
            res.redirect('/register')
        }
    })
    
    app.get('/logout', (req, res) => {
        req.logOut()
        res.redirect('/login')
    })

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
};


};