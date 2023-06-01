const Sequelize = require("sequelize");

const sequelize = new Sequelize("candy-store", "root", "Pj@8106228817", {
  dialect: "mysql",
  host: "localhost",
});

const CandyStore = sequelize.define("candy", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
    default: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  quantity: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});

module.exports = { sequelize, CandyStore };
