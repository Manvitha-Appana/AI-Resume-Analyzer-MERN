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

    const resume = await Resume.create({
      fileName: req.file.filename,
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

module.exports = {
  uploadResume,
};