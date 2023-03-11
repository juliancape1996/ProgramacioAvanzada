<template>
<ul>
    <li> {{ items }}</li>
</ul>
</template>

<script>
import {consulta} from '@/http/index.js'
export default{
    data(){
        return{
            items:[]
        }
    },
    methods:{
        consulta(){
            items = consulta();
        }
    },
    created(){
        consulta()
    }

}
</script>


