module.exports = (sequelize, Sequelize) => {
    const Employees = sequelize.define("employees", {
        empid: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull:false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull:false
        },
        lastname: {
            type: Sequelize.STRING
        },
        orgname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            allowNull:false
          },
    });

    return Employees;
};