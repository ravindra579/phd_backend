const express = require("express");
const router = express.Router();
const {data,graphdata} = require('./db')
router.route("/").get(data);
router.route("/:x/:y/:z").get(graphdata)
module.exports = router;