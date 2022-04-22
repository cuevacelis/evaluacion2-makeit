var express = require("express");
var router = express.Router();
const isAuthenticated = require("../middlewares/validar-jwt");

router.get("/", isAuthenticated, function (req, res, next) {
  res.send("Obtener toda la lista de favoritos");
});

router.post("/", isAuthenticated, function (req, res, next) {
  res.send("-Crea una nueva lista de favoritos");
});

router.get("/:id", isAuthenticated, function (req, res, next) {
  res.send("Obtener una lista de favoritos :id");
});

router.delete("/:id", isAuthenticated, function (req, res, next) {
  res.send("Eliminar uns lista de favoritos :id");
});

module.exports = router;
