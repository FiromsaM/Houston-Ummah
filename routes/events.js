const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const eventController = require('../controllers/event')
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', eventController.getEvent)

router.post('/createEvent', upload.single("file"), eventController.createEvent)

// router.put('/likeEvent/:id', eventController.likeEvent)

router.delete('/deleteEvent/:id', eventController.deleteEvent)

module.exports = router