const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    pratoimage: {
        required: true,
        type: String
    },
    pratonome: {
        required: true,
        type: String
    },
    pratodescri: {
        required: true,
        type: String
    },
    pratopreco: {
        required: true,
        type: Number
    },
    pratocategoria: {
        required: true,
        type: String
    }

})

module.exports = mongoose.model("DataPrato", dataSchema)