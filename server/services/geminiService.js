const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
//console.log("Gemini Key:", process.env.GEMINI_API_KEY);
const testGemini = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Reply with exactly: Gemini connection successful",
  });

  return response.text;
};
const analyzeResume = async (resumeText, targetRole , experienceLevel) => {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume for the ${experienceLevel} level ${targetRole} role.

IMPORTANT RULES:
1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT add explanation.
4. Do NOT wrap JSON inside \`\`\`.
5. All scores must be between 0 and 100.

Return this exact JSON structure:

{
  "scores": {
    "overall": number,
    "technical": number,
    "projects": number,
    "education": number,
    "experience": number,
    "keywords": number
  },
  "resumeSummary": "string",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": [],
  "interviewQuestions": []
}

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const cleanedText = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

try {
  return JSON.parse(cleanedText);
} catch (error) {
  throw new Error("Invalid JSON returned by Gemini.");
}


};

module.exports = {
  testGemini,
  analyzeResume,
};