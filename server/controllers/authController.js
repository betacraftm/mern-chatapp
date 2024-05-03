const User = require('../models/user')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')
const { StatusCodes } = require('http-status-codes')

const loginUser = async (req, res) => {
  try {
    const { userName, pwd } = req.body
    const user = await User.findOne({ userName })
    const isPasswordCorrect = await bcrypt.compare(pwd, user?.password || '')

    if (!user || !isPasswordCorrect) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid username or password' })
    }
    generateToken(user._id, res)
    res.status(StatusCodes.OK).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log('Error in login controller', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server error' })
  }
}

const logoutUser = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 })
    res.status(StatusCodes.OK).json({ message: 'Logout successfully' })
  } catch (error) {
    console.log('Error in logout controller', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server error' })
  }
}

const signupUser = async (req, res) => {
  try {
    const { fullName, userName, pwd, confirmPwd, gender } = req.body

    if (pwd !== confirmPwd) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Password don't match" })
    }

    const user = await User.findOne({ userName })

    if (user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Username already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(pwd, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

    const newUser = new User({
      fullName,
      userName,
      password: hashedPwd,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    })

    if (newUser) {
      await newUser.save()

      res.status(StatusCodes.CREATED).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      })
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid user data' })
    }
  } catch (error) {
    console.log('Error in signup controller', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server error' })
  }
}

module.exports = { loginUser, logoutUser, signupUser }
