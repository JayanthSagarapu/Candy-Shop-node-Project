const express = require("express");

const router = express.Router();

const candyController = require("../controllers/controller");

router.get("/", candyController.home);

router.post("/about", candyController.about);

router.post("/items/addItem", candyController.addItem);

router.get("/getItems", candyController.getItems);

router.put("/updatItem/:id", candyController.updateItem);

router.delete("/deleteItem/:id", candyController.deleteItem);

module.exports = router;
