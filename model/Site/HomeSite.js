const mongoose = require('mongoose');


const HomeSite = mongoose.Schema(
    {
        homeId:String,
        TitleTag:String,
        MetaDescription:Array,
        Metakeywords:String,
        canonical:String,
    }
);

const HomeSiteModel = mongoose.model('HomeSite',HomeSite);
module.exports = HomeSiteModel;
