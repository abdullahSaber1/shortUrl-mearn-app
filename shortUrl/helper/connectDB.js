const mongoose = require('mongoose');

const connectDB = async (MONGODB_URI) => {
  const connect = await mongoose
    .connect(MONGODB_URI)
    .catch((error) => console.log(" Can't Connect to MongoDB", error));
  if (connect) console.log('MongoDB Connected...');
};

module.exports = connectDB;
