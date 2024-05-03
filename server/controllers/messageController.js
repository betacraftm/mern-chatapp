const { StatusCodes } = require('http-status-codes')
const Conversation = require('../models/conversation')
const Message = require('../models/message')
const conversation = require('../models/conversation')

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const { id: receiverId } = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    // SOCKET IO HERE

    await Promise.all([conversation.save(), newMessage.save()])

    res.status(StatusCodes.CREATED).json(newMessage)
  } catch (error) {
    console.log('Error in sendMessage controller: ', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Interal server error' })
  }
}

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages')

    if (!conversation) return res.status(StatusCodes.OK).json([])

    res.status(StatusCodes.OK).json(conversation.messages)
  } catch (error) {
    console.log('Error in getMessages controller: ', error.message)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Interal server error' })
  }
}

module.exports = { sendMessage, getMessages }
