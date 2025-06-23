require('dotenv').config();
const { OpenAI } = require('openai');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY||'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'
,
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
