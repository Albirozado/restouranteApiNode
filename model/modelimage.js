const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    galeriafoto: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("galeriaimageurl", dataSchema)