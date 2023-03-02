const express = require('express')
const {join} = require('path')
require('ejs')
const app = express()

const rutas = require('./rutas.js')

app.set('view engine', 'ejs')
app.set('views',join(__dirname,'views'))
app.use(express.static('./static/style.css'))
app.use(rutas)

app.get("/home",(req,res)=>{
    res.send("hola desde home")
})

app.use((req,res)=>{
    res.send("error")
})


app.listen(5355)