const express = require("express");
const router = express.Router();
const Auth = require("../login");
const HistoryController = require('./../Controllers/HistoryController');

router.get("/", Auth.authenticateToken, HistoryController.getAllMovements);

module.exports = router;