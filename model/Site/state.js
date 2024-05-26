// models/State.js
const mongoose = require('mongoose');
var mongooseSlug = require('mongoose-slug-generator')

mongoose.plugin(mongooseSlug);


const stateSchema = new mongoose.Schema(
    {
        stateName: {
            type: String,
            required: true
        },
        slug: { type: String, slug: "stateName" }
    },
    {
        timestamps:true
    }
);

const State = mongoose.model('State', stateSchema);

module.exports = State;
