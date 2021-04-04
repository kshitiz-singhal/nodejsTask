const db = require("../models");
var secret = require("../config.json").secretKey;
const User = db.user;
const Emp = db.emp;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.registration = (req, res) => {

  Emp.create({
    empid: req.body.empid,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    orgname: req.body.orgname,
    email: req.body.email
  })
    .then(()=>{
        User.create({ 
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })
    })
    .then(() => {
        res.send({ message: "User was registered successfully!" });
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.email }, secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        accessToken:token
      });

    })
    
        
    
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};