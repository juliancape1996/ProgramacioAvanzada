const express = require('express')

const app = express()


app.get('/home', (req, res) =>{
    
    res.send('es es el home')
})

app.post('/home', (req, res) =>{
    res.send('es es el post')

    
})

//para que salga por defecto ante algun error
app.use((req, res) =>{
    res.status('404').send('este es el home')
})

app.listen(3000)
