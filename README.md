<br>
<u>

<center>

![alttext](public/codingCat.gif)

# Reverse Engineering Code

</u>

<u>

## Goal: 

</u>
</center>

### My goal for this assignment was to reverse engineer the code provided. Within each file, I described code line by line. Each file and folder has a specific purpose, and all work together to make the application work. I included the routes for files dependant on other files. At the end of the tutorial, there are instructions for how you can add changes to the project.

<br>


<br>



## Criteria:

Within this project, I included:

<center>

```
1. Walk through application using Sequelize/Passport
2. Linkedin, Github and Email
3. Understanding of the codebase
4. Instructions on changes to project

 ```

</center>

<br>

<u>

## Tutorial:

1. You will need to open up an integrated terminal through server.js and npm install to get all the needed dependencies that are necessary for the application to run. 
2. Then, go to your config folder, and enter your password into the config.json file.
3. Next, you will need to create your database query into whatever database management tool you want to use (MySQL Workbench, Sequel Pro, ect.)
4. Then, run node server.js in your integrated terminal.
5. A success message will pop up with the local host port you can enter into your browser to view.
6. You can now enjoy the application!

</u>

<br>

<br>

<u>

## Explanation Of Files:

</u>

<br>

- Config Folder: 

    -  Within the config folder, there is a config.json and passport.js file, and a middleware folder containing a isAuthentiated.js file.
       - The config.json connects to the server, and contains the information to the database. In this folder, you input your username and password, databasename, host, and dialect. 
       - The passport.js file contains the user email and password for login information. Authentication middleware for Node.js. It serves a single purpose: to authenticate requests. Three pieces need to be configured to use Passport for authentication: 1. authentication strategies, 2. application software, 3. sessions(optional)
       - In our middleware, we have isAuthentication.js Middleware provides services and capabilities that are common to applications such as: data management, application services, messaging, authentication, and API management. In this file, we have a restriction on routes that allow a user in and request if the user is logged in.




  <br>

- Models Folder: 

    -  Within the models folder, there are three files: index.js, package.json and user.js.
        - The index.js file is for importing user data, creating new sequelize using the config info for the database, username, and password.
        - The user.js file requires bcrypt, which is for password hashing, and creates the User model. 

  <br>

- Public Folder: 

    -  Within the public folder, there are two folders: js (containing three files: login.js, members.js and signup.js), stylesheets (style.css), and three files login.html, members.html, and signup.html.
       - The login.js file provides validation and submits form for the user's email and password. It also takes action if the email or password is blank or wrong, it returns error.
       - The members.js file does a GET request to figure out which user is logged in, and updates the HTML onto the page.
       - The signup.html file validates email when signup button is clicked, and if both email and password are correct, and it will redirect to the members page. 

  <br>
  
- Routes Folder: 

    -  Within the routes folder, there are two files: api-routes.js and html-routes.js.
       - The api-routes.js file contains all the API routes (.post, .get) for signups, login, and logging out. 
       - The html-routes.js redirects the user to the correct page, members or public depending on the login information.

<br>

- Server.js:
    - The server.js file requires all necessary packages, sets up port and database, require routes, and sync databases.

## Technologies Used:

- Visual Studio Code
- Gitlab
- Terminal
- Github

<br>

## Table of Contents:
1. Goal
2. Criteria
3. Issues
4. Technologies Used
5. Table of Contents
6. Links
7. Deployed Link


<br>

## Links:

- [Link to Github](https://github.com/kellystone4/reverseEngineeringCode)
- [Link to LinkedIn](https://www.linkedin.com/in/kelly-a-stone/)


