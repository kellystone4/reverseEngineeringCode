// PASSPORT: Authenticaltion midleware for Node.js. It serves a single purpose: to authenticate requests.
//Three pieces need to be configured to use Passport for authentication:
//..1. authentication strategies, 2. application software, 3. sessions(optional)

//require method: used to load javascript modules.
//...as you see there are THREE requires, they are all shown in the package.json
var passport = require("passport");
//LocalStrategy is being used for username/password authentication below with the "use" formula below.
var LocalStrategy = require("passport-local").Strategy;

//PASSPORT LOCAL VS PASSPORT???

//var db is requiring the database from "models"
var db = require("../models");

// this tells passport we want to use a Local Strategy...aka we want login with a username/email and password
passport.use(new LocalStrategy(
  // instead of username, our user will sign in with "email"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // "db.User.findOne" function happens when a user tries to sign in, this finds their email and make sure it equals an email in the database.
    db.User.findOne({
      where: {
        email: email
      }
      // then, if there is no matching email, this function runs
    }).then(function(dbUser) {
      // saying, if it is null, return the message "incorrect email"
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
