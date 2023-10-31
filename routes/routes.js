const express = require("express")
const Model = require("../model/model")

const router = express.Router()

router.post("/postprato", async (req, res)=>{
    const data = new Model({
        pratoimage: req.body.pratoimage,
        pratonome: req.body.pratonome,
        pratodescri: req.body.pratodescri,
        pratopreco: req.body.pratopreco,
        pratocategoria: req.body.pratocategoria
    })
    try{
        const datasave = await data.save()
        res.status(200).json(datasave)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

router.get("/getallprato", async (req, res)=>{
    
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


router.get("/getpratoid/:id", async (req, res)=>{
    try{
        const dataID = await Model.findById(req.params.id)
        res.json(dataID)

    }
    catch (error){
        res.send({message:error.message})


    }
})

router.delete("/deleteprato/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.pratonome} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }})








module.exports = router;