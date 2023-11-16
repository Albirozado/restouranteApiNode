const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")
const cors = require("cors");
require("dotenv").config()


const app = express()
const PORT = 5000
const mongoString = process.env.DATABASE_URL
app.use(express.json())
app.use(cors())

mongoose.connect(mongoString)
const database = mongoose.connection

database.on("error", (error) =>{
    console.log(error)
})

database.once("connected", ()=>{
    console.log("database connected")
})



app.get("/", (req, res) =>{
    res.send("ola restorante")
})

app.use("/api", routes)
app.listen(PORT, ()=>{console.log(`servidor corendo na porta ${PORT}`)})