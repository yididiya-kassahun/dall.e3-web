
const express = require("express");

const router = express.Router();

const dashboard = require("../controllers/dashboard");

router.get("/home", dashboard.getDashboard);

module.exports = router;