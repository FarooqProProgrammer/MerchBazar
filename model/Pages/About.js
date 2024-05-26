var mongoose = require('mongoose');



const AboutSchema = mongoose.Schema(
    {
       
        AboutDescription: { 
            type:String,
            required:true,
        },
        Id: { 
            type:String,
            required:true
        }

    },
    {
        timestamps:true
    }
);




var AboutModel = mongoose.model('About',AboutSchema);
module.exports = AboutModel;