//will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  $.get("/api/user_data").then(function(data) {
     // and updates the HTML on the page
    $(".member-name").text(data.email);
  });
});
