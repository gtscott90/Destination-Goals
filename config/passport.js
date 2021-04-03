var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    // passwordField: 'password'
  },
  function(email, password, done) {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Your Email is incorrect. Please try again."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "You have entered an incorrect password. Please try again."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
