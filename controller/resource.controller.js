const db = require("../models");
const User = db.user;
const Emp = db.emp;
const Op = db.Sequelize.Op;

exports.userlist = (req, res) => {
  
    
  if(req.body.firstname){
    Emp.findOne({
        where:{
            firstname: req.body.firstname
        }
    })
    .then(data =>{
        
        if(data){
        res.status(200).send(data);
        }
        else{
            res.status(404).send({message: "first name doesnot exist"})
        }
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  }

  else if(req.body.lastname){
    Emp.findOne({
        where:{
            lastname: req.body.lastname
        }
    })
    .then(data =>{
        if(data){
            res.status(200).send(data);
            }
            else{
                res.status(404).send({message: "last name doesnot exist"})
            }
    })   

    .catch(err => {
        res.status(500).send({ message: err.message });
      });

  }

  else if(req.body.empid){
    Emp.findOne({
        where:{
            empid: req.body.empid
        }
    })
    .then(data =>{
        if(data){
            res.status(200).send(data);
            }
            else{
                res.status(404).send({message: "empid doesnot exist"})
            }
    })
    
    .catch(err => {
        res.status(500).send({ message: err.message });
      });

  }

else{
  Emp.findAll()
    .then(data =>{
        if(data){
            res.status(200).send(data);
            }
            else{
                res.status(404).send({message: "No records found"})
            }
    })

    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

};

