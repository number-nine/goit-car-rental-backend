const express = require("express");
const favoriteCtrl = require("../../controllers/favorites");

const { validateBody, validateParams } = require("../../middlewares");
const {schemas} = require("../../models/favorites")

const router = express.Router();


router.get("/", favoriteCtrl.getFavorites);

router.post(
  "/",
  validateBody(schemas.addFavorite),
  favoriteCtrl.createFavorite
);
router.delete("/:id", validateParams(schemas.addFavorite), favoriteCtrl.deleteFavorite);


module.exports = router;
