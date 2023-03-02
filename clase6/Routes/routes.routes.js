const express= require('express');
const routes = express.Router();
const crud = require('../controllers/crud.js')


routes.get('/',crud.list);
routes.get('/create',crud.getSave);
routes.get('/delete/:id',crud.delete);
routes.get('/edit/:id',crud.consulta);
routes.post('/save',crud.save);
routes.post('/update',crud.update);
module.exports=routes