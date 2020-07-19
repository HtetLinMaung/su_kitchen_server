const express = require("express");
const { body } = require("express-validator");
const { signup, login } = require("../controllers/AuthController");
const User = require("../models/User");

const router = express.Router();

router.put(
  "/signup",
  [
    body("name").not().isEmpty().withMessage("Name must not be empty!"),
    body("phone_no")
      .trim()
      .isLength({ max: 11, min: 9 })
      .custom((v) => {
        return User.findOne({ phone_no: v }).then((user) => {
          if (user) {
            return Promise.reject(
              "User with this phone number already existed!"
            );
          }
        });
      }),
    body("password").not().isEmpty().withMessage("Password must not be empty")
  ],
  signup
);

router.post(
  "/login",
  [
    body("phone_no").trim().isLength({ max: 11, min: 9 }),
    body("password").not().isEmpty().withMessage("Password must not be empty")
  ],
  login
);

module.exports = router;
