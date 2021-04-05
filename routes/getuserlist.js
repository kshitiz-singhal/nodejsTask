const authJwt = require("../plugin/authjwt");
const controller = require("../controller/resource.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
      "/alluser",
      [authJwt.verifyToken],
       controller.userlist);

    app.post(
        "/getuser",
        [authJwt.verifyToken],
         controller.userlist);

};