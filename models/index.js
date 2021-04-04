//const config = require("../config/db.config.js");
var dbconf = require("../config.json").database;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbconf.db,
  dbconf.user,
  dbconf.password,
  {
    host: dbconf.host,
    dialect: dbconf.dialect,
    operatorsAliases: false,

    pool: dbconf.pool
    
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user")(sequelize, Sequelize);
db.emp = require("../models/emp")(sequelize, Sequelize);


db.user.belongsTo(db.emp, { foreignKey: 'empid' });
// db.user.belongsTo(db.emp);
//db.emp.hasOne(db.user, { foreignKey: 'empid' });



db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;