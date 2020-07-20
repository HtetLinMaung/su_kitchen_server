const express = require("express");
const { body } = require("express-validator");
const isAuth = require("../middlewares/is-auth");
const {
  createCategory,
  findCategories,
  updateCategory,
  removeCategory,
  findCategory
} = require("../controllers/CategoryController");
const router = express.Router();

router
  .route("/")
  .post(isAuth, [body("category_name").not().isEmpty()], createCategory)
  .get(isAuth, findCategories);

router
  .route("/:id")
  .get(isAuth, findCategory)
  .put(isAuth, [body("category_name").not().isEmpty()], updateCategory)
  .delete(isAuth, removeCategory);

module.exports = router;
