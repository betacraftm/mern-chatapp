const express = require('express')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const messageRoutes = require('./routes/messageRoutes')
const connectDB = require('./db/connectDb')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOption = require('./config/corsOption')

const app = express()
const PORT = process.env.PORT || 1010

connectDB()

dotenv.config()

app.use(cors(corsOption))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

mongoose.connection.once('open', () => {
  console.log('Connected to DB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
