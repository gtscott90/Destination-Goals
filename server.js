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
const mysql = require('mysql');
// var connection;
const bodyParser = require('body-parser');
const path = require('path');

var db = require("./models");
 
/* const bodyParser = require('body-parser');

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); */

/* const initializePassport = require('./config/passport')
initializePassport(
  passport, 
  email => users.find(users => users.email === email),
  id => users.find(user => user.id === id)
) 
 */
const PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
 host: 'localhost',
 port: 3306,
   user: 'root',  
   password: process.env.PASSWORD,
  database: "goals_db"
 });
 };



const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring our routes


require("./config/passport", passport, db.User);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


require("./routes/goals-routes")(app);
require("./routes/XXXXdestinationController")(app);
require("./routes/api-routes.js")(app);


/* 
app.get('/', (req, res) => {
  res.render('index.handlebars', { name: req.user.name })
})

app.get('/login', (req, res) => {
  res.render('login.handlebars')
});

app.post('/login',  passport.authenticate('local', 
{
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register',  (req, res) => {
  res.render('register.handlebars')
})

app.post('/register',  checkNotAuthenticated,  async (req, res) => {
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
} */


db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
