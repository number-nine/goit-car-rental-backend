const express = require("express");
const advertCtrl = require("../../controllers/adverts");

const { validateQuery } = require("../../middlewares");
const { schemas } = require("../../models/advert");

const router = express.Router();

router.get(
  "/",
  validateQuery(schemas.queryFilters),
  advertCtrl.getFilteredAdverts
);

module.exports = router;
