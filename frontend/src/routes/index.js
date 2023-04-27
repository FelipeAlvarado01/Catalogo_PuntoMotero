const express = require("express");
const route = express.Router();
const { getAll, getOne, create, update, deleteItem} = require("../controllers/index.js");

route.get("/getAll", getAll);
route.get("/getOne/:value", getOne);
route.post("/create", create);
route.put("/update/:value", update);
route.delete("/delete/:value", deleteItem);

module.exports = route;