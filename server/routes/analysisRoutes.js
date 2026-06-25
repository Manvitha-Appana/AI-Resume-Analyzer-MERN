const express = require("express");

const router = express.Router();

const {
  testConnection,
} = require("../controllers/analysisController");

router.get("/test", testConnection);

module.exports = router;