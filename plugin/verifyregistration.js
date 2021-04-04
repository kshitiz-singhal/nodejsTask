const db = require("../models");
const Emp = db.emp;

checkDuplicateEmpId = (req, res, next) => {
    
    Emp.findOne({
      where: {
        empid: req.body.empid
      }
    }).then(emp => {
      if (emp) {
        res.status(400).send({
          message: "Failed! EmployeeID is already in use!"
        });
        return;
    }
        next();
      
    });
  };
  

  const verifyRegistration = {
    checkDuplicateEmpId: checkDuplicateEmpId
  };
  
  module.exports = verifyRegistration;