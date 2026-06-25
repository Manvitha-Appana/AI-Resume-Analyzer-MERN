const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    targetRole: {
      type: String,
      required: true,
    },

   scores: {
  overall: {
    type: Number,
    default: 0,
  },

  technical: {
    type: Number,
    default: 0,
  },

  projects: {
    type: Number,
    default: 0,
  },

  education: {
    type: Number,
    default: 0,
  },

  experience: {
    type: Number,
    default: 0,
  },

  keywords: {
    type: Number,
    default: 0,
  },
},

    strengths: [
      {
        type: String,
      },
    ],

    weaknesses: [
      {
        type: String,
      },
    ],

    missingSkills: [
      {
        type: String,
      },
    ],

    suggestions: [
      {
        type: String,
      },
    ],

    interviewQuestions: [
      {
        type: String,
      },
    ],

    analysisVersion: {
      type: String,
      default: "1.0",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Analysis",
  analysisSchema
);