const express = require("express");
const advertCtrl = require("../../controllers/adverts");
const filterCtrl = require("../../controllers/filters");

// const { } = require("../../middlewares");

const router = express.Router();


router.get(
  "/",
  advertCtrl.getFilteredAdverts
);

router.get("/filters", filterCtrl.getFilters);

module.exports = router;
