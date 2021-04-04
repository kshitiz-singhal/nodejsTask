module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING
      },
      
    });
  
    return Users;
  };