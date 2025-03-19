const express = require("express");
const router = express.Router();
const Auth = require("../login");
const SkillController = require('./../Controllers/SkillController');
const SkillTypeController = require('./../Controllers/SkillTypeController');


router.get("/", Auth.authenticateToken, SkillController.getSkills);
router.post("/create", Auth.authenticateToken, SkillController.createSkill);
router.put("/update", Auth.authenticateToken, SkillController.updateSkill);
router.delete("/delete", Auth.authenticateToken, SkillController.deleteSkill);

router.get("/type", Auth.authenticateToken, SkillTypeController.getSkillTypes);
router.post("/type/create", Auth.authenticateToken, SkillTypeController.createSkillType);
//router.put("/type/update", Auth.authenticateToken, SkillTypeController.updateSkillTypes);
//router.delete("/type/delete", Auth.authenticateToken, SkillTypeController.deleteSkillType);

module.exports = router;