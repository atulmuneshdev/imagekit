const express = require("express")
const multer = require("multer")
const { createPost, getPosts, postDelete } = require("../controller/Post.controller")


const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })

router.post("/create", upload.single("image"),createPost)
router.get("/getPosts",getPosts)

router.delete("/delete/:id",postDelete)

module.exports = router
