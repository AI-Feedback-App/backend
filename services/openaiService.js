require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


exports.getAIResponse = async (userInput) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(
      `Give constructive feedback on the following:\n"${userInput}"`
    );

    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error("Gemini API error:", err.message);
    return "Sorry, Gemini AI failed to generate feedback.";
  }
};
