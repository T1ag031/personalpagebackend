const express = require("express");
const router = express.Router();
const Auth = require("../login");
const UserController = require('./../Controllers/UserController');
const UserTypeController = require('./../Controllers/UserTypeController');

router.get("/", Auth.authenticateToken, UserController.getUsers);
router.post("/create", Auth.authenticateToken, UserController.createUser);
router.put("/update", Auth.authenticateToken, UserController.updateUser);
router.delete("/delete", Auth.authenticateToken, UserController.deleteUser);

router.get("/type", Auth.authenticateToken, UserTypeController.getUserTypes);
router.post("/type/create", Auth.authenticateToken, UserTypeController.createUserType);

module.exports = router;