// this requires bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// this creates the User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      // datatypes.string (this is showing that the datatype is a string)
      type: DataTypes.STRING,
      // allowNull:false - this does not allow it to be empty, 
      allowNull: false,
      unique: true,
      //validate the email if it is true
      validate: {
        isEmail: true
      }
    },
    // allowNull:false - this does not allow it to be empty, 
    password: {
      //the data type will be string, cannot be null
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // user.addHook is an automatic method run during User Model lifecycle
  // before a User is created, their password will be automatically hashed
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
