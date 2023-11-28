const express = require("express");
const filterCtrl = require("../../controllers/filters");

// const { } = require("../../middlewares");

const router = express.Router();


router.get("/", filterCtrl.getFilters);

module.exports = router;
