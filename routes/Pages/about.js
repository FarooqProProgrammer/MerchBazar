const express = require('express');
const AboutModel = require('../../model/Pages/About')

const route = express.Router();



route.post('/about', async (req, res) => {
    const { AboutDescription, Id } = req.body;
    console.log(AboutDescription)
    console.log(Id)

    try {
        // Check if document with provided ID exists
        const existingAbout = await AboutModel.findOne({ Id });

        if (existingAbout) {
            // Update existing document
            existingAbout.AboutDescription = AboutDescription;
            await existingAbout.save();
            res.status(200).json({ message: 'About updated successfully' });
        } else {
            // Create new document
            const newAbout = new AboutModel({ AboutDescription, Id });
            await newAbout.save();
            res.status(201).json({ message: 'New About added successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});






module.exports = route