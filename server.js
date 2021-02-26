if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./config/passport-config.js')
initializePassport(
  passport, 
  email => users.find(users => users.email === email),
  id => users.find(user => user.id === id)
)

const users = []; 

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
// **UPDATE TO HAVE CORRECT CONTROLLER FOLDER**
/* const routes = require('./controllers/destinationController');

app.use(routes);
 */

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', 
{
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  //what is put after Body corresponds with "name=" field in Register
  try {
      // can hold hashedPassword in database
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      ////instead of pushing to Array, push to mySQL database
      users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword

      })
      res.redirect('/login')
  } catch {
      res.redirect('/register')
  } console.log(users)
})

app.delete('/logout', (req, res) => {
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


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`)
);