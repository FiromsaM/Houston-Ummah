const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
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
        required: true,
      },
      likes: {
        type: Number,
        required: true,
      },
      date:{
        type: Date,
        require: true,
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