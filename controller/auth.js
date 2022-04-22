const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt");

const User = require("../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "user o pass incorrect",
      });
    }
    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "user o pass incorrect",
      });
    }

    const tokenJWT = await generarJWT(user.id);

    res.json({
      msg: "login succeful",
      tokenJWT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error Login",
    });
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFind = await User.findOne({ email });

    if (userFind) {
      return res.status(400).json({
        msg: "Este usuario ya existe",
      });
    }

    const user = new User({ email, password });

    if (password.length < 8) {
      return res.status(400).json({
        msg: "La pass es menor a 8 caracteres",
      });
    }

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();
    res.status(200).json({
      msg: "Usuario creado",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error Register",
    });
  }
};

module.exports = { login, register };
