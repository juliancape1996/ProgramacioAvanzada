const conexion= require('../bd/database.js')


//LISTAR TODOS
exports.list=(req,res)=>{
    conexion.query('SELECT * FROM persona',(error,results)=>{
    if (error) {
    throw error;
    }else{
    res.render('../views/index.ejs',{results:results});
    }
    });
}

//CONSULTA UNO PARA PODERLO MOSTRAR EN EL UPDATE
exports.consulta=(req, res)=>{
    const id = req.params.id
    conexion.query('SELECT * FROM persona WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
        }else{
            res.render('../views/edit.ejs',{persona:results[0]});
        }

    })    
}

//Redirecciona al formulario de crear
exports.getSave=(req,res)=>{
    res.render('../views/create.ejs')
}

//CREA UNA NUEVA PERSONA
exports.save=(req,res)=>{
   const nombre=req.body.nombre;
   const apellido=req.body.apellido;

   conexion.query('INSERT INTO persona(nombre,apellido) VALUES (?,?)',[nombre,apellido],(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
   });

}

//ACTUALIZA UNA PERSONA
exports.update = (req,res)=>{
    const id= req.body.id;
    const nombre= req.body.nombre;
    const apellido= req.body.apellido;

    conexion.query('UPDATE persona SET ?  WHERE id=?',[{nombre,apellido},id],(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
   });
}

//ELIMINA UNA PERSONA
exports.delete = (req,res)=>{
    const id= req.params.id;
    conexion.query('DELETE FROM persona WHERE id=?',[id],(error,results)=>{
        if (error) {
            throw error;
        }else{
            res.redirect('/');
        }
    })
}