const mongoose = require("mongoose");
const List = require("../models/list");
const Favorites = require("../models/favorites");
const User = require("../models/user");

const getListFavorites = async (req, res) => {
  try {
    const listFind = await User.find()
      .select("email")
      .populate({
        path: "lists",
        match: { status: { $in: true } },
        select: "name",
        populate: { path: "favorites" },
      });
    res.json({
      msg: "Total de lista de favoritos",
      data: listFind,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Error getListFavorites",
    });
  }
};

const createListFavorites = async (req, res) => {
  try {
    const tokenDecode = req.tokenDecode;
    const { list } = req.body;
    const listFind = await List.findOne({ name: list.name });
    if (listFind) {
      return res.status(400).json({
        status: "error",
        msg: `La lista con el nombre ${list.name} ya existe`,
      });
    }

    if (!list.favorites || list.favorites.length === 0) {
      return res.status(500).json({
        status: "error",
        msg: "Error, para crear su lista debe tener al menos un favorito",
      });
    }

    const dataNewList = {
      user: tokenDecode.data,
      name: list.name,
    };
    console.log(dataNewList);
    const listNew = new List(dataNewList);
    await listNew.save();

    const dataNewFavorite = list.favorites.map((favorites) => ({
      list: listNew._id,
      ...favorites,
    }));
    await Favorites.insertMany(dataNewFavorite);

    return res.status(200).json({
      status: "success",
      msg: "Lista de favoritos creada",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Error create list",
      expectedPOST: {
        list: {
          name: "movies",
          favorites: [
            {
              title: "La Guerra de las galaxias",
              description: "pelicula chevere",
              link: "netflix.com",
            },
          ],
        },
      },
    });
  }
};

const getOneListFavorites = async (req, res) => {
  try {
    const tokenDecode = req.tokenDecode;
    const { id } = req.params;
    const listOneFind = await User.find({
      user: mongoose.Types.ObjectId(tokenDecode.data),
    })
      .select("email")
      .populate({
        path: "lists",
        match: { _id: { $in: [id] }, status: { $in: true } },
        select: "name",
        populate: { path: "favorites" },
      });
    res.json({
      msg: "Total de lista de favoritos",
      data: listOneFind,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Error",
    });
  }
};

const deleteOneListFavorites = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await List.findByIdAndUpdate(
      id,
      { status: false },
      { new: true }
    );
    res.json({
      msg: "lista eliminada",
      list,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      msg: "Error deleteOneListFavorites",
    });
  }
};

module.exports = {
  getListFavorites,
  createListFavorites,
  deleteOneListFavorites,
  getListFavorites,
  getOneListFavorites,
};
