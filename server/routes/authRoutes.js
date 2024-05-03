const express = require('express')
const {
  loginUser,
  logoutUser,
  signupUser,
} = require('../controllers/authController')

const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)

module.exports = router
