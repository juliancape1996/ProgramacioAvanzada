const funciones= require('./funciones.js')
const os = require('os');


//con este se sabe  cuales metodos tiene os 
//y el .length da el tamaño que es de 23
//console.log(Object.keys(os).length);
//console.log(Object.keys(os));


//arquitectura del sistema
//console.log(os.machine());

//console.log(os.arch);

//version de sistema operativo
//console.log(os.version());

//tiempo en el cual ha sido utilizado el sistema y la maquina
//console.log(os.uptime());

//informacion del usuario
//console.log(os.userInfo());

//familia del sistema operativo
//console.log(os.type());


//total de memoria ram disponible
//console.log(os.totalmem());

//memoria ram disponible
//console.log(os.freemem());

//Establece una prioridad del proceso (numero)
//console.log(os.setPriority());

//consulta la prioridad del proceso
//console.log(os.getPriority());

//version del sistema operativo especifica
//console.log(os.release());

//plataforma sobre la cual se trabaja
//console.log(os.platform());

//nombre del usuario 
//console.log(os.hostname());

//informar sobre el procesador
//console.log(os.cpus());

//capasidad de sub procesos
//console.log(os.availableParallelism());

//directorio predeterminado para los archivos temporales
//console.log(os.tmpdir());

//let mapIdUsers = os.cpus().slice(0,1).map((registro) => registro.model);

//console.log(mapIdUsers);




//Filter
/*
const arreglo = [-5,-4,-3,-2,-1,0,1,2,3,4,5]

const positivoPar=(numero) =>{
    if (numero %2 === 0 && numero>0) {
        return true;
    }

    return false;
}

console.log( arreglo.filter(positivoPar));
*/

//Map el map se utiliza mas que todo cuando hay que modificar o 
/*
const numArr = [1,2,3,4,5,6,7];
numArr.map(aNum => {
    return aNum * aNum;
});
*/

//Reduce
/*
const myArry = [3,9,12,23,99,1];
myArry.reduce((total, num)=>{
    return total + num;
})
*/

/*unir dos objetos
const hola = {
    saludo:"hola"
}

const hola2 = {
    saludo:"hola",
    nombre:"camilo"
}

console.log(Object.assign(hola,hola2));

*/

let memoriaRamDis= os.freemem();
let ramTotal = os.totalmem();
let sisteOperativo = os.release();


let datosFrecuenIde = os.cpus().slice(0,1).map((registro) => registro.times.idle);
let datosFrecuenIrq = os.cpus().slice(0,1).map((registro) => registro.times.irq);
let datosFrecuenNice = os.cpus().slice(0,1).map((registro) => registro.times.nice);
let datosFrecuenSys = os.cpus().slice(0,1).map((registro) => registro.times.sys);
let datosFrecuenUser = os.cpus().slice(0,1).map((registro) => registro.times.user);


const datos  = [{
    
    sisteOperativo:sisteOperativo,
    ramTotalGb:funciones.ramDisponibleGb(ramTotal),
    //ramTotalMb:funciones.ramDisponibleMb(ramTotal),
    //memoriaRamDisGb:funciones.ramDisponibleGb(memoriaRamDis),
    memoriaRamDisMb:funciones.ramDisponibleMb(memoriaRamDis),
    datosFrecuenIde:datosFrecuenIde,
    datosFrecuenIrq:datosFrecuenIrq,
    datosFrecuenNice,
    datosFrecuenSys,
    datosFrecuenUser
    

}]

module.exports ={
    datos
}



