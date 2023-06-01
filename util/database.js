const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker", "root", "Pj@816228817", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
