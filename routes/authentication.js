const verifyregistration = require("../plugin/verifyregistration");
const controller = require("../controller/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/registration",
    [
    verifyregistration.checkDuplicateEmpId,
    ],
    controller.registration
  );

  app.post("/signin", controller.signin);
};