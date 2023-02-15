const express = require('express')
const router = express.Router()
// const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
// const postControllers = require('../controllers/post')
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.indexGet)
// router.get('/profile', ensureAuth, postControllers.getProfile)
// router.get('/feed', ensureAuth, postControllers.getFeed)

// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)


module.exports = router