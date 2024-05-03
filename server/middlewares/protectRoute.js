const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')

dotenv.config()

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Unauthorized - No token' })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Unauthorized - Invalid token' })
    }

    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' })
    }

    req.user = user

    next()
  } catch (error) {
    console.log('Error in protect route middleware', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server error' })
  }
}

module.exports = protectRoute
