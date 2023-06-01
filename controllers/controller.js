const path = require("path");

const { sequelize, CandyStore } = require("../models/candyDb");

exports.addItem = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const item = await CandyStore.create({
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  });
  res.send(item);
};

exports.getItems = async (req, res) => {
  const items = await CandyStore.findAll();
  res.send(items);
};

exports.updateItem = async (req, res) => {
  const prodId = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const upadatedItem = await CandyStore.update({
    name: name,
    description: description,
    price: price,
    quantity: quantity,
    where: { id: prodId },
  });

  res.send(upadatedItem);
};

exports.deleteItem = async (req, res) => {
  const prodId = req.params.id;
  await CandyStore.destroy({ where: { id: prodId } });
  res.send("deleted");
};

exports.home = async (req, res) => {
  res.send("home");
};

exports.about = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/candy.html"));
};
