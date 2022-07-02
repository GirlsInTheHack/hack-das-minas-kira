const express = require("express");
const routes = express.Router();
const user = require("../controller/user");


routes.post("/create", user.create);
routes.post("/login", user.login);
routes.put("/update/:id", user.update);
routes.delete("/delete/:id", user.deleting);


module.exports = routes;
