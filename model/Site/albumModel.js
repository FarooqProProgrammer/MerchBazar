// models/designModel.js

const mongoose = require('mongoose');

const designModelSchema = new mongoose.Schema({
  Albumname:{
    type: String,
    required: true
  },
  AlbumStatus: {
    type: String,
    required: true
  },
  AlbumProductIds :{
    type: [mongoose.Schema.Types.ObjectId],
    ref:'designModel'
  },
  userId: {
    type: String,
    required: true
  },
  userIdwithMetaData: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'auth'
  },
  
 
});

const DesignAlbum = mongoose.model('DesignAlbum', designModelSchema);

module.exports = DesignAlbum;
