//Middleware provides servies and capabilities that are common to applications such as:
//...data management, application services, messaging, authentication, and API management.

// NOT LOGGEED IN: restricts routes a user is not allowed to visit if they are not logged in
module.exports = function(req, res, next) {

  // IF USER LOGGED IN: continue with request to the restricted route
  if (req.user) {
    return next();
  }

  // USER NOT LOGGED IN: Redirect them to login page
  return res.redirect("/");
};
