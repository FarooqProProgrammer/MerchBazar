const express = require('express');
const HomeSite = require('../../model/Site/HomeSite');
const csurf = require('csurf');
const route = express.Router();
const csrfProtection = csurf({ cookie: true });

route.post('/home-site', async (req, res) => {
    const { homeId, TitleTag, MetaDescription, MetaKeywords, canonical } = req.body;

    try {
        let homeSite = await HomeSite.findOne({ homeId });

        if (homeSite) {
            // Document exists, update it
            homeSite.TitleTag = TitleTag;
            homeSite.MetaDescription = MetaDescription;
            homeSite.MetaKeywords = MetaKeywords;
            homeSite.canonical = canonical;
            await homeSite.save();
            res.redirect('/site')
        } else {
            // Document doesn't exist, create a new one
            homeSite = new HomeSite({
                homeId,
                TitleTag,
                MetaDescription,
                MetaKeywords,
                canonical
            });
            await homeSite.save();
            res.redirect('/site')
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = route;
