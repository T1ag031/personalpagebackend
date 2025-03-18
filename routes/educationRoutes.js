const express = require("express");
const router = express.Router();
const Auth = require("../login");
const EducationController = require('./../Controllers/EducationController');

router.get("/", Auth.authenticateToken, EducationController.getEducation);
router.post("/create", Auth.authenticateToken, EducationController.createEducation);
router.put("/update", Auth.authenticateToken, EducationController.updateEducation);
router.delete("/delete", Auth.authenticateToken, EducationController.deleteEducation);

module.exports = router;