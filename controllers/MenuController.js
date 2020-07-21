const { validationResult } = require("express-validator");
const Menu = require("../models/Menu");

exports.findMenus = async (req, res, next) => {};

exports.findMenu = async (req, res, next) => {};

exports.createMenu = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }

    if (req.user_role === "customer") {
      const error = new Error("Not Authorized");
      error.statusCode = 401;
      throw error;
    }
    const menu = new Menu({
      menu_name: req.body.menu_name,
      price: req.body.price
    });
    res.status(201).json({ data: result, message: "Created successfully" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateMenu = async (req, res, next) => {};

exports.removeMenu = async (req, res, next) => {};
