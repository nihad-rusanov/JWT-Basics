const express = require("express");
const router = express.Router();
const { dashboard, login } = require("../controllers/main");
const authMiddileware = require("../middileware/auth");

router.post("/login", login);

router.get("/dashboard", authMiddileware, dashboard);

module.exports = router;
