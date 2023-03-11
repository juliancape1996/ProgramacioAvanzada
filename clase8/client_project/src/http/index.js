
const axios = require('axios');
 
function consulta() {
    axios.get('http://localhost:3000/items').then(res => {
        this.item = res.data;
    });
}


module.exports ={
    consulta
}