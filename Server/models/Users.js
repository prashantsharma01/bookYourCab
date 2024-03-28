const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String
})

const usermodel = mongoose.model("users", userSchema)
module.exports = usermodel