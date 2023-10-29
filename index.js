const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")
require("dotenv").config()


const app = express()
const PORT = 5000
const mongoString = process.env.DATABASE_URL
app.use(express.json())

mongoose.connect(mongoString)
const database = mongoose.connection

database.on("error", (error) =>{
    console.log(error)
})

database.once("connected", ()=>{
    console.log("database connected")
})



app.get("/", (req, res) =>{
    res.send("ola resto")
})

app.use("/api", routes)
app.listen(PORT, ()=>{console.log(`servidor corendo na porta ${PORT}`)})