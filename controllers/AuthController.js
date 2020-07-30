const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = new User({
      name: req.body.name,
      phone_no: req.body.phone_no,
      password: hashedPassword,
      role: "customer"
    });
    const result = await user.save();
    res.json({ message: "User created successfully", data: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed!");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    }
    const user = await User.findOne({ phone_no: req.body.phone_no });
    if (!user) {
      const error = new Error("User with this phone number does not existed!");
      error.statusCode = 404;
      throw error;
    }
    const isEqual = await bcrypt.compare(req.body.password, user.password);
    if (!isEqual) {
      const error = new Error("Password is incorrect!");
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECRET,
      {
        expiresIn: "1d"
      }
    );
    res.json({ message: "logged in successful", token, role: user.role });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
