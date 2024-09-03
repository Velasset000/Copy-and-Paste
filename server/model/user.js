const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    title: String,
    template: String,
    key: Number
});


module.exports = mongoose.model('template', templateSchema);