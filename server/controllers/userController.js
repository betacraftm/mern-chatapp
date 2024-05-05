const { StatusCodes } = require('http-status-codes')
const User = require('../models/user')

const getUsersForSidebar = async (req, res) => {
  try {
    const logInUserId = req.user._id
    const allUsers = await User.find({ _id: { $ne: logInUserId } }).select(
      '-password'
    )

    if (!allUsers)
      res.status(StatusCodes.NO_CONTENT).json({ message: 'No user to display' })

    return res.status(StatusCodes.OK).json(allUsers)
  } catch (error) {
    console.log('Error in getUserForSideBar: ', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal server error' })
  }
}

module.exports = { getUsersForSidebar }
