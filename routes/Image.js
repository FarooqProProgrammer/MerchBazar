const express = require('express');
const multer = require('multer');
const path = require('path')
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

const upload = multer({ storage: storage });


router.post('/upload', upload.single('image'), (req, res) => {
    // Assuming 'image' is the name of the input field in your form
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Return the path of the uploaded image
    const imagePath = req.file.path;
    res.send(imagePath);
});


router.post('/base64', (req, res) => {
    // Get the base64 image data from the request body
    const base64Data = req.body.image;
    console.log(base64Data)

    if (!base64Data) {
        return res.status(400).send('No image data provided.');
    }

    // Extract the mime type and base64 image data from the data URL
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
        return res.status(400).send('Invalid image data format.');
    }

    const mimeType = matches[1];
    const imageData = matches[2];

    // Generate a unique filename for the image
    const filename = uuidv4(); // You can use any method to generate a unique filename
    const imagePath = path.join(__dirname, 'uploads', `${filename}.png`);

    // Convert base64 image data to a buffer
    const buffer = Buffer.from(imageData, 'base64');

    // Write the buffer to the filesystem
    fs.writeFile(imagePath, buffer, (err) => {
        if (err) {
            return res.status(500).send('Error saving image.');
        }

        // Construct the URL of the saved image
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${filename}.png`;

        // Return the URL of the saved image
        res.status(200).send(imageUrl);
    });
});





router.get('/upload/:filename', (req, res) => {
    const fileName = req.params.filename;
    console.log(fileName)
    const filePath = path.join(__dirname, 'uploads', fileName);
    res.sendFile(filePath);
});



module.exports = router;