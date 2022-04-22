var express = require("express");
var router = express.Router();

const { login, register } = require("../controller/auth");

router.post("/login", function (req, res, next) {
  console.log("entro a login");
  login(req, res);
});

router.post("/register", function (req, res, next) {
  console.log("entro a register");
  register(req, res);
});

module.exports = router;
