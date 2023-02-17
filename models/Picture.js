const mongoose = require('mongoose');

const PictureSchema = new mongoose.Schema({
    name: {type: String, require: true},
    src: {type: String, require: true}
})

module.exports = mongoose.model("Picture", PictureSchema)