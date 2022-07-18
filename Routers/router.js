var express = require("express");
var router = express.Router();
var emailController = require("./../Controllers/emailSendController");
// Home page route.
router.get("/", emailController.single_email);
module.exports = router;
