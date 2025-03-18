const express = require("express");
const router = express.Router();
const Auth = require("../login");
const HobbiesController = require('./../Controllers/HobbiesController');

router.get("/", Auth.authenticateToken, HobbiesController.getHobbies);
router.post("/create", Auth.authenticateToken, HobbiesController.createHobby);
router.put("/update", Auth.authenticateToken, HobbiesController.updateHobby);
router.delete("/delete", Auth.authenticateToken, HobbiesController.deleteHobby);

module.exports = router;