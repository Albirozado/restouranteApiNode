const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")
const cors = require("cors");
require("dotenv").config()


const app = express()
const PORT = process.env.PORT || 5000

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE_URL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  
  //Routes go here
  app.all('/', (req,res) => {
      res.json({"every thing":"is awesome"})
  })

app.use("/api", routes)
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
