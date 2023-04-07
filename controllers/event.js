const cloudinary = require("../middleware/cloudinary");
const Event =  require('../models/Event')
let moment = require('moment-timezone');

module.exports = {
    getProfile: async (req, res) => {
        try {
            const event = await Event.find({user: req.user.id}).sort({ createdAt: "desc" }).lean();
            res.render('profile.ejs', {event: event, user: req.user, moment: moment })
        } catch (error) {
            console.log(error)
        }
    },
    getFeed: async (req, res) => {
        try {
            const event = await Event.find().sort({ date: 1 }).lean();
            res.render('feed.ejs', {event: event, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    getCalendar: async (req, res) => {
        try {
            const event = await Event.find().sort({ date: 1 }).lean();
            res.render('calendar.ejs', {event: event, user: req.user, moment})
        } catch (error) {
            console.log(error)
        }
    },
    getIftar: async (req, res) => {
        try {
            const event = await Event.find().sort({ createdAt: "desc" }).lean();
            res.render('iftar.ejs', {event: event, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    getEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id)
            res.render('event.ejs', {event: event, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    getWeeklyEvent: async (req, res) => {
        try {
            const event = await Event.find().sort({ createdAt: "desc" }).lean();

            res.render('weekly.ejs', {event: event, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    
    createEvent: async (req, res) => {
        try {
             // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await Event.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                caption: req.body.caption,
                weekly: req.body.weekly,
                iftar: req.body.iftar,
                dayOfWeek: req.body.dayOfWeek,
                date: req.body.date,
                user: req.user.id,
                userName: req.user.userName
            });
            console.log("Event has been added!");
            res.redirect("/profile");
        } catch (error) {
            console.log(error)
        }
    },
    likeEvent: async (req, res) => {
        try {
            await Event.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $inc: { likes: 1 },
                })
                console.log("Likes +1")
                res.redirect(`/event/${req.params.id}`)
        } catch (error) {
            console.log(error)
        }
    },
    deleteEvent: async (req, res) => {
        try {
            // Find event by id
           let event = await Event.findById({ _id: req.params.id })
      
           // Delete image from cloudinary
           await cloudinary.uploader.destroy(event.cloudinaryId);
           
           // Delete event from db
           await Event.remove({ _id: req.params.id})
           console.log("Deleted Event");
           res.redirect('/profile')
        } catch (error) {
            res.redirect('/profile')
        }
    }
}