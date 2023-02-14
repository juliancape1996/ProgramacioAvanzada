//imprimir dos objetos que salgan los resultados de manera aleatoria 

let listaUsuarios = require('./modulos/usuario');
let listaProfesiones = require('./modulos/profesiones');

console.log(listaUsuarios[Math.floor(Math.random()*(11-1)+1)])
console.log(listaProfesiones[Math.floor(Math.random()*(11-1)+1)])

