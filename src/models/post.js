const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post
