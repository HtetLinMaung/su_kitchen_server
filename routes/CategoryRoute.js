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
  .post(
    isAuth,
    [
      body("category_name").not().isEmpty(),
      body("tags").isArray(),
      body("available_time").not().isEmpty(),
      body("sub_categories").isArray()
    ],
    createCategory
  )
  .get(isAuth, findCategories);

router
  .route("/:id")
  .get(isAuth, findCategory)
  .put(
    isAuth,
    [
      body("category_name").not().isEmpty(),
      body("tags").isArray(),
      body("available_time").not().isEmpty(),
      body("sub_categories").isArray()
    ],
    updateCategory
  )
  .delete(isAuth, removeCategory);

module.exports = router;
