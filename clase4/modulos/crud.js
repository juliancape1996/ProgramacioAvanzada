const express = require('express');
const fs = require('fs');
const app = express();
const host = "localhost";
const port = 3001;
let database = [];
const bodyParser = require('body-parser');
app.use(express.json())

app.post ('/add',(req, res)=>{

    producto={id:database.length+1,nombre:req.body.nombre,precio : req.body.precio}; 
    database.push(producto);
    let data= `${JSON.stringify(producto)}\n`
    fs.writeFileSync("./modulos/baseDatos.txt",data,{
           flag:'a',
    })   

    res.send(data);
    console.log(typeof(database));
    console.log( Object.values(database));
})


app.get('/productos',(req, res)=>{

    
    const read = fs.readFileSync("./modulos/baseDatos.txt","utf-8");
    const arrayTexto= read.split("\n")
    res.send(arrayTexto);


})

app.get('/productos/:id',(req, res)=>{

    const read = fs.readFileSync("./modulos/baseDatos.txt","utf-8")
    const arrayTexto= read.split("\n")
    res.send(arrayTexto[parseInt( req.params.id)-1])



})



app.put('/productos/:id',(req, res)=>{
    const {nombre, precio} = req.body;
    //const comoUdQuiera=req.body;
    let read = fs.readFileSync("./modulos/baseDatos.txt","utf-8")
    let arrayTexto= read.split("\n")

    for (let i = 0; i <= arrayTexto.length; i++) {

        if (i === parseInt(req.params.id)-1) {
              
            const objetoJSON = JSON.parse(arrayTexto[i]);
            objetoJSON.nombre=nombre;
            objetoJSON.precio=precio;
            res.send(arrayTexto[i]);

        }
    

    }
    
    console.log(typeof(arrayTexto));
    let data=  (arrayTexto).toString()
    fs.writeFileSync("./modulos/baseDatos.txt",data,'utf-8') 

   
    

})

app.delete('/productos/:id',(req, res)=>{
    const read = fs.readFileSync("./modulos/baseDatos.txt","utf-8")
    const arrayTexto= read.split("\n")
    let elementoEncontrado=arrayTexto[parseInt( req.params.id)-1]
    const nuevoArreglo=arrayTexto.filter(function(arreglo3){
        return arreglo3 !=elementoEncontrado
    })
  
    console.log(JSON.parse(nuevoArreglo));
    
    console.log(nuevoArreglo);
    let data= (nuevoArreglo).toString()
    fs.writeFileSync("./modulos/baseDatos.txt",data) 
    

   
})


app.use((req, res)=>{
    res.status(404).send("<h1>Error 404 </h1>")
})

app.listen(port,host,()=>{
    console.log(`el link de acc es http://${host}:${port}`);
})

