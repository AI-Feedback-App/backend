const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI||'mongodb+srv://yashkataraei:<N0c8fVBfCsblvo7d>@cluster0.qt5rwin.mongodb.net/');
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
