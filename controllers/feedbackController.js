const Feedback = require('../models/Feedback');
const { getAIResponse } = require('../services/openaiService');

exports.getFeedback = async (req, res) => {
  const { response } = req.body;
  const aiFeedback = await getAIResponse(response);
  const entry = new Feedback({ user_input: response, feedback: aiFeedback });
  await entry.save();
  res.json({ feedback: aiFeedback });
};

exports.getHistory = async (req, res) => {
  const history = await Feedback.find().sort({ timestamp: -1 });
  res.json(history);
};
