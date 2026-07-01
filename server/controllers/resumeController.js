const Resume = require("../models/Resume");
const fs = require("fs");
const pdfParse = require("pdf-parse");
//console.log("PDF PACKAGE:", pdf);


const uploadResume = async (req, res) => {
  try {
    const pdfBuffer = fs.readFileSync(
      req.file.path
    );

    const pdfData = await pdfParse(
      pdfBuffer
    );
    const user = JSON.parse(
      req.body.user
    );

    const resume = await Resume.create({
      userId: user.id,
      fileName: req.file.originalname,
      filePath: req.file.path,
      extractedText: pdfData.text,
    });

    res.status(201).json({
      message:
        "Resume uploaded and parsed successfully",
      resume,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      resumes,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
  getUserResumes,
};