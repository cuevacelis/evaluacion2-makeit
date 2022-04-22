var express = require("express");
var router = express.Router();
const isAuthenticated = require("../middlewares/validar-jwt");
const {
  createListFavorites,
  deleteOneListFavorites,
  getListFavorites,
  getOneListFavorites,
} = require("../controller/listOfFavorites");

router.get("/", isAuthenticated, function (req, res, next) {
  getListFavorites(req, res);
});

router.post("/", isAuthenticated, function (req, res, next) {
  createListFavorites(req, res);
});

router.get("/:id", isAuthenticated, function (req, res, next) {
  getOneListFavorites(req, res);
});

router.delete("/:id", isAuthenticated, function (req, res, next) {
  deleteOneListFavorites(req, res);
});

module.exports = router;
