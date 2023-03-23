const cloudinary = require("../middleware/cloudinary");
const Event =  require('../models/Event')

module.exports = {
  getHome: (req, res) => {
      res.render('home.ejs')
  },

  getHome1: async (req, res) => {
    try {
        const event = await Event.find().sort({ createdAt: "desc" }).lean();

        res.render('home1.ejs', {event: event, user: req.user})
    } catch (error) {
        console.log(error)
    }
},
  getAbout: (req, res) => {
    res.render('about.ejs')
  }
}