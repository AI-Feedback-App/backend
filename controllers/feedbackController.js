const Feedback = require('../models/Feedback');
const { getAIResponse } = require('../services/geminiService'); // <-- updated

exports.getFeedback = async (req, res) => {
  const { response } = req.body;
  try {
    const aiFeedback = await getAIResponse(response);
    const entry = new Feedback({ user_input: response, feedback: aiFeedback });
    await entry.save();
    res.json({ feedback: aiFeedback });
  } catch (err) {
    console.error('Error saving feedback:', err);
    res.status(500).json({ error: 'Failed to generate feedback' });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await Feedback.find().sort({ timestamp: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch history' });
  }
};
