const express = require("express");
const { body } = require("express-validator");
const isAuth = require("../middlewares/is-auth");
const {
  createMenu,
  findMenus,
  removeMenu,
  updateMenu,
  findMenu
} = require("../controllers/MenuController");
const router = express.Router();

router
  .route("/")
  .post(
    isAuth,
    [body("menu_name").not().isEmpty(), body("price").isNumeric()],
    createMenu
  )
  .get(isAuth, findMenus);

router
  .route("/:id")
  .get(isAuth, findMenu)
  .put(
    isAuth,
    [body("menu_name").not().isEmpty(), body("price").isNumeric()],
    updateMenu
  )
  .delete(isAuth, removeMenu);

module.exports = router;
