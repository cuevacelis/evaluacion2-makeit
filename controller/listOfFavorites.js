const mongoose = require("mongoose");
const List = require("../models/list");

const getListFavorites = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error",
    });
  }
};

const createListFavorites = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error",
    });
  }
};

const getOneListFavorites = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error",
    });
  }
};

const deleteOneListFavorites = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error",
    });
  }
};

module.exports = { login, register };
