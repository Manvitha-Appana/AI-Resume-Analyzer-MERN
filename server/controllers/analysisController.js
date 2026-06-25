const { testGemini } = require("../services/geminiService");

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

module.exports = {
  testConnection,
};