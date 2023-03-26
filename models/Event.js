const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
      },
      image: {
        type: String,
        require: true,
      },
      cloudinaryId: {
        type: String,
        require: true,
      },
      caption: {
        type: String,
      },
      weekly:{
        type: Boolean,
        require: true,
      },
      iftar:{
        type: Boolean,
        require: true,
      },
      dayOfWeek: {
        type: String,
      },
      date:{
        type: Date,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      userName: {
        type: mongoose.Schema.Types.String,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Event', EventSchema)