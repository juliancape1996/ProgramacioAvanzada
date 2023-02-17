const fs =require('fs');
const os = require('os');


//leer el contenido de un archivo
const dato = fs.readFileSync('data/dato.txt','utf-8')
console.log(dato);


//const tue = fs.readFileSync('data/tue.js')
//console.log(tue.toString());

//crea un archivo y inserta un contenido 
//const n = "sad";
//fs.writeFileSync('./data/tercero.js',n)

///crea un archivo y añade contenido
//for (let i = 1; i <= 10; i++) {
//    hola = `${i}\n`;
//    fs.writeFileSync('./data/tercero.js',hola,{
///        flag:'a',
//    })    
//} 
const ramDisponibleGb = valor =>{
    valor = valor*(Math.pow(10,-9));
    return valor;
}
const usuario = os.userInfo().username
const procesador = os.cpus().slice(0,1).map((registro) => registro.model)
let memoriaTotal = ramDisponibleGb(os.totalmem());
const version =os.version();

const fin = (`Usuario: ${usuario } \nRam:${memoriaTotal} \nVersion: ${version} \nProcesador: ${procesador}`).toString()

 fs.writeFileSync('./data/dato.txt', fin)



 fs.readFile('./data/dato.txt','utf-8',(err,data ) =>{
    if (err) {
        console.log(err);
    }
    console.log(data);
 })