const { json } = require('express');
const express = require('express');
const fs = require('fs')
const app = express();
const host = "localhost";
const port = 3000;


//con este es para poder leer json
//app.use(express.json())

//este es para poder leer texto
//app.use(express.text())
app.use(express.urlencoded())//para recibir formularios



//app.get('/home',(req, res)=>{
 //   res.send("<h1>Está en el Home</h1>")
//})


app.get('/persona/:name/:apellido',(req, res)=>{
    let nombre=req.params.name
    res.send(`Hola tu nombre es ${nombre} y tu apellido es ${req.params.apellido} `)
})


app.get('/home/query',(req, res)=>{
    console.log(req.query);
    res.send(`esta son las querys y la query es ${req.query.saludo}`)
})

app.get('/home/body',(req, res)=>{
    console.log(req.body.nombre);
    res.send(req.body.nombre);
    //console.log(req.body.nombre);
    //console.log(`esto es desde el body ${req.body.nombre} ${req.body.apellido}`);
    //res.send(`esta son las querys y la query es ${req.body.nombre}  ${req.body.apellido}`)
    //res.json(req.body) asi se llama el obj completo

})

app.get('/adios',(req, res)=>{
    console.log(req.body.name);
    res.send(`Buena suerte ${req.body.name}`)
})






/*
app.post('/help',(req, res)=>{
    res.send("<h1>Está en el help</h1>")
})

*/
app.use((req, res,next)=>{
    if (req.query.nombre === "julian") {
        next();
    }else{
        res.send("ERROR NO HAY QUERY")
    }
})

app.get("/home",(req, res) =>{
    res.send(`La query es ${req.query.nombre}`)
})

app.use((req, res)=>{
    res.status(404).send("<h1>Error 404 </h1>")
})

app.listen(port,host,()=>{
    console.log(`el link de acc es http://${host}:${port}`);
})


