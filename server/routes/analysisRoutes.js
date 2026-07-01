const express = require("express");

const router = express.Router();

const {
  testConnection,
  analyzeResumeController,
  getAnalysisHistory,
} = require("../controllers/analysisController");

router.get("/test", testConnection);
router.post("/analyze", analyzeResumeController);
router.get("/history/:userId",getAnalysisHistory);

module.exports = router;