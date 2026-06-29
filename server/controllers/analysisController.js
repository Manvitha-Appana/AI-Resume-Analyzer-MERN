const Analysis = require("../models/Analysis");
const Resume = require("../models/Resume");

const {
  testGemini,
  analyzeResume,
} = require("../services/geminiService");

const testConnection = async (req, res) => {
  try {
    const response = await testGemini();

    res.status(200).json({
      success: true,
      message: response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const analyzeResumeController = async (req, res) => {
  try {
    const {
      resumeId,
      targetRole,
      experienceLevel,
    } = req.body;

    if (!resumeId || !targetRole || !experienceLevel) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }
    const analysisResult = await analyzeResume(
  resume.extractedText,
  targetRole,
  experienceLevel
);

    const analysis = new Analysis({
  userId: resume.userId,
  resumeId: resume._id,

  targetRole,
  experienceLevel,

  scores: analysisResult.scores,

  resumeSummary: analysisResult.resumeSummary,

  strengths: analysisResult.strengths,

  weaknesses: analysisResult.weaknesses,

  missingSkills: analysisResult.missingSkills,

  suggestions: analysisResult.suggestions,

  interviewQuestions: analysisResult.interviewQuestions,
});

await analysis.save();

return res.status(201).json({
  success: true,
  message: "Resume analyzed successfully.",
  analysis,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  testConnection,
  analyzeResumeController,
};