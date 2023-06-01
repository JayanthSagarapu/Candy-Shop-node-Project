const express = require("express");

const router = express.Router();

const candyController = require("../controllers/controller");

router.get("/", candyController.home);

router.post("/about", candyController.about);

router.post("/items/createItem", candyController.createItem);

router.get("/getItems", candyController.getItems);

router.put("/updateItem/:id", candyController.updateItem);

router.delete("/deleteItem/:id", candyController.deleteItem);

module.exports = router;
