<template>
<NavBar>
<v-row>
    <div v-for="(item, i) in lista" :key="i" class=" ml-5 mt-5">

            <v-col>
            <v-card
                class="mx-auto"
                max-width="300"
            >
                <v-img
                :src="item.download_url"
                height="200px"
                cover
                ></v-img>

                <v-card-title>
                 {{ item.author }}
                </v-card-title>

                <v-card-subtitle>
                {{ item.url }}
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="orange-lighten-2"
                    variant="text"
                >
                    Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="show = !show"
                ></v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
            
        </v-col>

        
   </div>
</v-row>
</NavBar>

</template>

<script>
import NavBar from '../components/Nav.vue'

    export default {

        data(){
            return{
                lista:[],
                show: false,
            }
        },
        methods:{
            
            obtenerData(){
            fetch('https://picsum.photos/v2/list?page=2&limit=10').then(response => response.json()).then(data =>{
                this.lista = data

               
            })
            .catch(error => console.log(error));
            }
        },
        created(){
            this.obtenerData();
        },
        components: {
        NavBar,
    },
    }

</script>

