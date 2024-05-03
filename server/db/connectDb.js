const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL)
  } catch (error) {
    console.log('Error connect to MongoDB', error.message)
  }
}

module.exports = connectDB
