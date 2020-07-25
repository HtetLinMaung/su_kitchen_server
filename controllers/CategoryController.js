const { validationResult } = require("express-validator");
const Category = require("../models/Category");
const User = require("../models/User");

exports.findCategories = async (req, res, next) => {
  try {
    const totalItems = await Category.find().isDeleted(false).countDocuments();
    const perPage = req.query.perPage || 10;
    const page = req.query.page || 1;
    const categories = await Category.find()
      .isDeleted(false)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));
    res.json({ data: categories, page, perPage, totalItems });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.findCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id).isDeleted(false);
    if (!category) {
      const error = new Error("Category not found!");
      error.statusCode = 404;
      throw error;
    }
    res.json({ data: category });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
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
    if (!req.file) {
      const error = new Error("Validation failed!");
      error.statusCode = 422;
      throw error;
    }

    const category_image = req.file.location;
    const category = new Category({
      category_name: req.body.category_name,
      category_image,
      tags: req.body.tags,
      available_time: req.body.available_time,
      userId: req.userId
    });
    const result = await category.save();
    const user = await User.findById(req.userId);
    user.categories.push(category);
    user.save();
    res.status(201).json({ data: result, message: "Created successfully" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateCategory = async (req, res, next) => {
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
    const category = await Category.findById(req.params.id);
    if (!category) {
      const error = new Error("Category not found!");
      error.statusCode = 404;
      throw error;
    }
    if (req.user_role === "agent" && req.userId != category.userId) {
      const error = new Error("Not Authorized!");
      error.statusCode = 401;
      throw error;
    }
    category.category_name = req.body.category_name;
    const result = await category.save();
    res.json({ message: "Updated successfully", data: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.removeCategory = async (req, res, next) => {
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
    const category = await Category.findById(req.params.id);
    if (!category) {
      const error = new Error("Category not found!");
      error.statusCode = 404;
      throw error;
    }
    if (req.user_role === "agent" && req.userId != category.userId) {
      const error = new Error("Not Authorized!");
      error.statusCode = 401;
      throw error;
    }
    category.softdelete((err, result) => {
      if (err) {
        err.statusCode = 500;
        next(err);
      } else {
        res.status(204).json({ message: "Deleted successfully", data: result });
      }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
