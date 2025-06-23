const express = require('express');
const router = express.Router();
const { getFeedback, getHistory } = require('../controllers/feedbackController');

router.post('/feedback', getFeedback);
router.get('/history', getHistory);

module.exports = router;
