const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      fileName: req.file.filename,
      filePath: req.file.path,
    });

    res.status(201).json({
      message: "Resume uploaded successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};