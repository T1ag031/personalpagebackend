const express = require("express");
const router = express.Router();
const Auth = require("../login");
const UserController = require('./../Controllers/UserController')

router.get("/", Auth.authenticateToken, UserController.getUsers);
router.post("/create", Auth.authenticateToken, UserController.createUser);
router.put("/update", Auth.authenticateToken, UserController.updateUser);
router.delete("/delete", Auth.authenticateToken, UserController.deleteUser);

module.exports = router;