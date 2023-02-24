const {Router} = require('express')

const router = Router()
const nombre = "Camilo"

router.get("/help",(req,res)=>{
    res.render("index",{nombre})
})

router.get("/web/:nombre",(req,res)=>{
    res.render("web",{
        nombre:req.params.nombre
    })
})
module.exports=router;