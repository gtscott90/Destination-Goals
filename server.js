if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

/* const initializePassport = require('./config/passport')
initializePassport(
  passport, 
  email => users.find(users => users.email === email),
  id => users.find(user => user.id === id)
) 
 */
const PORT = process.env.PORT || 8080;

var db = require("./models");

/* const users = [];  */

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring our routes
/* require("../project2/controllers/goals-routes.js")(app);
require("../project2/controllers/api-routes.js")(app); */ 

app.use(express.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))



app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.handlebars', { name: req.user.name })
})

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
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
         // password: hashedPassword

      })
      res.redirect('/login')
  } catch {
      res.redirect('/register')
  } console.log(users)
})

app.get('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

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

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
