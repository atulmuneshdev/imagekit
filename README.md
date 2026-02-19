# 🚀 MERN Image Upload API

### Node.js + Express + MongoDB + ImageKit

A production-ready backend API to upload, retrieve, and delete images
using Multer (memory storage) and ImageKit cloud storage.

---

## 📌 Features

- Upload Image to ImageKit
- Store Image URL + FileId in MongoDB
- Get All Posts
- Delete Post + Delete Image from Cloud
- Clean MVC Architecture
- Proper Error Handling

---

## 🏗️ Project Structure

project-root/
│ ├── controllers/ 
│
└── post.controller.js 
├── models/ 
│
└── post.js
 ├── services/ 
 │ └── storage.service.js 
 ├── routes/ │ 
 └──post.routes.js 
├── middleware/ 
│ └── upload.middleware.js 
├── .env 
├──server.js 
└── package.json

---

## ⚙️ Installation

```bash
npm init -y
npm install express mongoose multer imagekit dotenv
```

Run server:

```bash
node server.js
```

---

## 🔐 Environment Variables (.env)

PORT=5000 
MONGO_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

---

## 🔥 API Endpoints

### POST /api/posts

Form-Data: - title - description - image (file)

### GET /api/posts

### DELETE /api/posts/:id

---

## 🧠 Important Code Snippet (Controller Logic)

```js
exports.createPost = async (req, res) => {
  const { title, description } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const uploadedImage = await uploadFile(req.file.buffer);

    const post = await Post.create({
      title,
      description,
      imageUrl: uploadedImage.url,
      imageFileId: uploadedImage.fileId,
    });

    res.status(201).json({
      message: "Image Uploaded Successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Image upload error" });
  }
};
```

---

## 🚀 Future Improvements

- JWT Authentication
- Pagination
- Validation (Joi/Zod)
- Rate Limiting
- Docker Deployment

---

## 👨‍💻 Author

Atul Munesh\
MERN Stack Developer

---

⭐ If you like this project, give it a star on GitHub!
