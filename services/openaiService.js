require('dotenv').config();
const { OpenAI } = require('openai');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getAIResponse = async (userInput) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userInput }],
    });
    return chatCompletion.choices[0].message.content.trim();
  } catch (err) {
    console.error('OpenAI API error:', err.message);
    return 'Sorry, something went wrong.';
  }
};
