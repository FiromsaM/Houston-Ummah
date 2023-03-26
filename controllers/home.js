const cloudinary = require("../middleware/cloudinary");
const Event =  require('../models/Event')

module.exports = {
  getHome: async (req, res) => {
    try {
        const event = await Event.find().sort({ createdAt: "desc" }).lean();

        res.render('home.ejs', {event: event, user: req.user})
    } catch (error) {
        console.log(error)
    }
},
  getAbout: (req, res) => {
    res.render('about.ejs')
  }
}