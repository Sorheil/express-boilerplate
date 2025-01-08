//default use mongoose for orm

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

// Création of the model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;