const express = require("express");
const router = express.Router();
const Auth = require("../login");
const MeController = require('./../Controllers/MeController');

router.get("/", Auth.authenticateToken, MeController.getMe);
router.post("/create", Auth.authenticateToken, MeController.createMe);
router.put("/update", Auth.authenticateToken, MeController.updateMe);
//router.delete("/delete", Auth.authenticateToken, );

module.exports = router;