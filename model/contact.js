const mongoose = require("mongoose");

const contactModal = mongoose.Schema({

  fullname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("contact", contactModal);
