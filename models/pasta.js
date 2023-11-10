const mongoose = require("mongoose")
const pastaSchema = mongoose.Schema({
name: String,
weight: String,
price: Number
})
module.exports = mongoose.model("Pasta",
pastaSchema)
