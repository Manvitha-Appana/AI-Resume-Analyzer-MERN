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
const analyzeResume = async (
  resumeText,
  targetRole,
  experienceLevel
) => {
  const prompt = `
You are an expert ATS Resume Analyzer and Career Coach.

Analyze the following resume for a ${experienceLevel} level ${targetRole} role.

IMPORTANT RULES:
1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT add explanations outside JSON.
4. Do NOT wrap JSON inside \`\`\`.
5. All scores must be integers between 0 and 100.
6. Generate EXACTLY 10 interview questions.
7. interviewQuestions array MUST NEVER be empty.
8. Generate at least 5 strengths.
9. Generate at least 5 weaknesses.
10. Generate at least 5 missing skills.
11. Generate at least 5 suggestions.

Return this EXACT JSON structure:

{
  "scores": {
    "overall": 0,
    "technical": 0,
    "projects": 0,
    "education": 0,
    "experience": 0,
    "keywords": 0
  },
  "resumeSummary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": [],
  "interviewQuestions": []
}

Resume:

${resumeText}
`;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

  const cleanedText = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    const parsedResponse =
      JSON.parse(cleanedText);

    if (
      !parsedResponse.interviewQuestions ||
      parsedResponse.interviewQuestions.length === 0
    ) {
      parsedResponse.interviewQuestions = [
        "Tell me about yourself.",
        `Why are you interested in the ${targetRole} role?`,
        "Explain one of your projects in detail.",
        "What challenges did you face during your projects?",
        "How do you approach problem solving?",
        "What are your strengths and weaknesses?",
        "How do you stay updated with new technologies?",
        "Describe a situation where you worked in a team.",
        "Why should we hire you?",
        "Where do you see yourself in five years?"
      ];
    }

    return parsedResponse;
  } catch (error) {
    console.error(
      "Gemini JSON Parsing Error:",
      cleanedText
    );

    throw new Error(
      "Invalid JSON returned by Gemini."
    );
  }
};

module.exports = {
  testGemini,
  analyzeResume,
};