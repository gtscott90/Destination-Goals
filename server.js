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
const bodyParser = require('body-parser');
const path = require('path');
var moment = require('moment'); 
moment().format(); 

var db = require("./models");
 
const PORT = process.env.PORT || 8080;

let connection 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: "goals_DB"
});
};

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require("./config/passport", passport, db.User);

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


require("./routes/api-routes.js")(app);
require("./routes/goals-routes")(app);


db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
