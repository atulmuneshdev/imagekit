const imagekit = require("@imagekit/nodejs");

const imagekitInstance = new imagekit({
    privatekey: process.env.IMAGEKIT_PRIVATE_KEY,
})

exports.uploadFile = async (buffer) => {
    console.log('Uploading file to ImageKit...', buffer);

    try {
        const result = await imagekitInstance.files.upload({
            file: buffer.toString('base64'),
            fileName: `image.jpg`
        })
        return result

    } catch (error) {
        console.error('Error uploading file:', error);

    }

}




exports.deleteFile = async (fileId) => {
    try {
        await imagekit.deleteFile(fileId)
    } catch (error) {
        console.error("Error deleting file from ImageKit:", error)
        throw error
    }
}