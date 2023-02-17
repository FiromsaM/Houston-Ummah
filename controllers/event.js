const cloudinary = require("../middleware/cloudinary");
const Event =  require('../models/Event')
// const Comment =  require('../models/Comment')

module.exports = {
    getProfile: async (req, res) => {
        try {
            const event = await Event.find({user: req.user.id});
            res.render('profile.ejs', {event: event, user: req.user })
        } catch (error) {
            console.log(error)
        }
    },
    getEvent: async (req, res) => {
        try {
            const event = await Event.find().sort({ createdAt: "desc" }).lean();
            res.render('events.ejs', {event: event, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    getWeeklyEvent: async (req, res) => {
        try {
            res.render('weekly.ejs')
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
                likes: 0,
                user: req.user.id,
                userName: req.user.userName
            });
            console.log("Event has been added!");
            res.redirect("/profile");
        } catch (error) {
            console.log(error)
        }
    },
    // likeEvent: async (req, res) => {
    //     try {
    //         await Event.findOneAndUpdate(
    //             {_id: req.params.id},
    //             {
    //                 $inc: { likes: 1 },
    //             })
    //             console.log("Likes +1")
    //             res.redirect(`/event/${req.params.id}`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    // deleteEvent: async (req, res) => {
    //     try {
    //         // Find event by id
    //        let event = await Event.findById({ _id: req.params.id })
      
    //        // Delete image from cloudinary
    //        await cloudinary.uploader.destroy(event.cloudinaryId);
           
    //        // Delete event from db
    //        await Event.remove({ _id: req.params.id})
    //        console.log("Deleted Event");
    //        res.redirect('/profile')
    //     } catch (error) {
    //         res.redirect('/profile')
    //     }
    // }
}