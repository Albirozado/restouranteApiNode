const express = require("express")
const Model = require("../model/model")
const ModelImege = require("../model/modelimage")
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
    }
})

router.post("/postgaleria", async (req, res)=>{

    const data = new ModelImege({
        galeriafoto: req.body.galeriafoto
        
    })
    try{
        const datasave = await data.save()
        res.status(200).json(datasave)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

router.delete("/deletegaleria/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await ModelImege.findByIdAndDelete(id)
        res.send(`Document with ${data.galeriafoto} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get("/getallgaleria", async (req, res)=>{
    
    try{
        const data = await ModelImege.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//menu filder data 

router.get("/getmaispedidos", async (req, res)=>{
    
    try{
        const data = await Model.find({"pratocategoria":"maispedidos"})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



router.get("/getcafe", async (req, res)=>{
    
    try{
        const data = await Model.find({"pratocategoria":"cafe"})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get("/getentradas", async (req, res)=>{
    
    try{
        const data = await Model.find({"pratocategoria":"entradas"})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get("/getprincipal", async (req, res)=>{
    
    try{
        const data = await Model.find({"pratocategoria":"principal"})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get("/getsobremensa", async (req, res)=>{
    
    try{
        const data = await Model.find({"pratocategoria":"sobremesa"})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})






module.exports = router;