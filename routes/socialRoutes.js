const express = require("express");
const router = express.Router();
const Auth = require("../login");
const SocialController = require('./../Controllers/SocialController');

router.get("/", Auth.authenticateToken, SocialController.getSocials);
router.post("/create", Auth.authenticateToken, SocialController.createSocial);
router.put("/update", Auth.authenticateToken, SocialController.updateSocial);
router.delete("/delete", Auth.authenticateToken, SocialController.deleteSocial);

module.exports = router;