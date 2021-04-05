# Project Folder Structure:

## Project folder structure will look like this.

- controller

        auth.controller.js   //handle signup & signin actions

        resources.controller.js  //handels protected content

- models

        emp.js  //employees sequelize model

        index.js  // intialize sequelize and models

        user.js  //user sequelize model

- plugin

       authjwt.js  //verify Token

       index.js  //intialize plugins

       verifuregistration.js  //check duplicate empID

- routes

      authentication.js  // signup & signin

      getuserlist.js  // public & protected resources

- config.json  //configure MySQL database & Sequelize and configure Auth Key

- server.js  // import and initialize neccesary modules and routes, listen for connections.

## Technology

- Express 4.17.1
- bcryptjs 2.4.3
- jsonwebtoken 8.5.1
- Sequelize 5.21.3
- MySQL








