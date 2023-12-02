const express = require("express");
const filterCtrl = require("../../controllers/filters");

const router = express.Router();


router.get("/", filterCtrl.getFilters);

module.exports = router;
