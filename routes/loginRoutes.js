const express = require("express");
const router = express.Router();
const Login = require("../login");

router.post("/", Login.login);

module.exports = router;