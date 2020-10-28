//will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function() {
  // Getting references to form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
  // event.preventDefault keeps the page from reloading before the function completes running
    event.preventDefault();
    // this wholes the variable for userData
    var userData = {
    // .trim() trims off any excess spaces for user email and password input
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    //if either email or password field is blank, loginUser is never called and the post request is never sent.
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route 
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
    //Then successful, redirects us the the members page
      .then(function() {
        window.location.replace("/members");
      })
    // Log the error if there is one
      .catch(function(err) {
        console.log(err);
      });
  }
});
