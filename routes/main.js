const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const eventControllers = require('../controllers/event')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getHome)

router.get('/profile', ensureAuth, eventControllers.getProfile)
router.get('/feeds', eventControllers.getFeed)
router.get('/iftar', eventControllers.getIftar)
router.get('/weeklyevents', eventControllers.getWeeklyEvent)
router.get('/about', homeController.getAbout)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)


module.exports = router