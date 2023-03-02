//CRUD DE PERSONAS 
const { json } = require('express');
const express = require('express')
const app=express();


app.set('view engine','ejs' );
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/',require('./Routes/routes.routes.js'));

app.listen(8000);
console.log('http://localhost:8000');
