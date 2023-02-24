const {Router} = require('express')
const routes = Router()

routes.get('/info', (req,res)=>{
    res.send("Hola desde Info")
})

module.exports = routes