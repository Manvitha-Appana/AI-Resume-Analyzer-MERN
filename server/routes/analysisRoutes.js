const express = require("express");

const router = express.Router();

const {
  testConnection,
  analyzeResumeController,
} = require("../controllers/analysisController");

router.get("/test", testConnection);
router.post("/analyze", analyzeResumeController);

module.exports = router;