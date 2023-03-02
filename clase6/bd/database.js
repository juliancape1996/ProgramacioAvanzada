const mysql = require('mysql2');

const conexion=  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_node',
});

conexion.connect((error)=>{
    if (error) {
        console.error('El error de conexion es: '+error);
        return;
    }
    console.log('Está conectado a la base de datos');
})

module.exports=conexion;