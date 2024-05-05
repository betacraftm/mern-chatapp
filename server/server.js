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
const credentials = require('./middlewares/credential')
const { app, server } = require('./socket/socket')
const PORT = process.env.PORT || 1010
const path = require('path')

connectDB()

dotenv.config()

app.use(credentials)

app.use(cors(corsOption))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cookieParser())

app.use('/api/auth', authRoutes)

app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)
app.use(express.static(path.join(__dirname, '..', 'app', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'app', 'dist', 'index.html'))
})

mongoose.connection.once('open', () => {
  console.log('Connected to DB')
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
