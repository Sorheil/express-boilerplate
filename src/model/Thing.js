//default use mongoose for orm

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thingSchema = new Schema({
    name: { type: String, required: true },
})
module.exports = mongoose.model('Thing', thingSchema);