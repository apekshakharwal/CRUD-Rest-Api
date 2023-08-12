const Sequelize = require('sequelize');
const sequelize = new Sequelize('College', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port:'5432',
  logging: false,
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("../models/student.models")(sequelize, Sequelize);

module.exports = db;