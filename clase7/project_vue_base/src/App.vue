<script setup>
//realizar un boton que sume , otro que reste , otro de restablecer 
//cuando los numero sena negativos sean rojos
//positivos verdes
//otro boton agregar

import {ref ,computed} from "vue";
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
let dato= ref(0);
let arreglo=ref([])

function aumentar() {
  return dato.value++;
}

function disminuir() {
  return dato.value--;
}

function recetear() {
  return dato.value=0;
}

function agregarArreglo() {
  arreglo.value.push(dato.value); 
  console.log(arreglo.value);
     
}


const desabilitarBoton = computed(()=> {
  const datoEncontrado = arreglo.value.find(n => n=== dato.value)

  return datoEncontrado || datoEncontrado === 0;
  
});
</script>

<template> 
  <h1 :class="dato >= 0 ? 'positivo':'negativo'"> {{dato}}</h1>

  <button @click="aumentar()">Aumentar</button>
  <button @click="disminuir()">Disminuir</button> 
  <button @click="recetear()">Restablecer</button> 
  <button :disabled="desabilitarBoton" @click="agregarArreglo()" >Agregar</button>

  <h2>{{arreglo }}</h2>

</template>

<style scoped>
 
 .positivo{
  color: green;
 }

 .negativo{
  color: red;
 }

</style>
