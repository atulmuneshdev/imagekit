const Post = require("../models/post")
const { uploadFile, deleteFile } = require("../services/storage.service")



exports.createPost = async (req, res) => {
  const { title, description } = req.body

  try {

    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" })
    }

    // Upload image to ImageKit
    const uploadedImage = await uploadFile(req.file.buffer)

    const post = await Post.create({
      title,
      description,
      imageUrl: uploadedImage.url
    })

    res.status(201).json({
      message: "Image Uploaded Successfully",
      post
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Image upload error" })
  }
}


exports.getPosts = async(req,res)=>{
    try {
        const posts = await Post.find()

        res.status(200).json({message:"Posts retrieved successfully", posts})
        
    } catch (error) {
        res.status(500).json({message:"Error retrieving posts", error})
    }
}

exports.postDelete = async (req, res) => {
  try {
    const { id } = req.params

    const post = await Post.findById(id)

    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }

    //  Delete image from ImageKit
    if (post.imageFileId) {
      await deleteFile(post.imageFileId)
    }

    //  Delete from DB
    await Post.findByIdAndDelete(id)

    res.status(200).json({
      message: "Post and image deleted successfully"
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: "Error deleting post",
      error: error.message
    })
  }
}