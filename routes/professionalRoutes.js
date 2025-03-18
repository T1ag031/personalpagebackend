const express = require("express");
const router = express.Router();
const Auth = require("../login");
const Professionalcontroller = require('./../Controllers/ProfessionalController');

router.get("/", Auth.authenticateToken, Professionalcontroller.getProfessionalExp);
router.post("/create", Auth.authenticateToken, Professionalcontroller.createProfessionalExp);
router.put("/update", Auth.authenticateToken, Professionalcontroller.updateProfessionalExp);
router.delete("/delete", Auth.authenticateToken, Professionalcontroller.deleteProfessionalExp);

module.exports = router;