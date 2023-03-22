const express = require("express");
const router = express.Router();
const { register } = require("../Controllers/register.js");
const { signUpRules, validator } = require("../middleware/validator");


// register
router.post("/register", signUpRules(), validator, register);

module.exports = router;
