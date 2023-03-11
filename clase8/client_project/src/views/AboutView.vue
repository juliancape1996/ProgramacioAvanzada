<template>
  <v-app id="inspire">
    
    <v-navigation-drawer v-model="drawer">
      <RouterLink to="/" >
      <div class="d-flex justify-space-around align-center flex-column flex-sm-row" >
        <v-btn
          class="w-80 h-70 ma-5"
          variant="outlined"
          color="black"
        >
        Home
      </v-btn>
      </div>
    </RouterLink>
    <RouterLink to="/about" >
      <div class="d-flex justify-space-around align-center flex-column flex-sm-row" >
        <v-btn
          class="w-80 h-70 ma-5"
          variant="outlined"
          color="black"
        >
        About
      </v-btn>
      </div>
    </RouterLink>
    <RouterLink to="/help" >
      <div class="d-flex justify-space-around align-center flex-column flex-sm-row" >
        <v-btn
          class="w-80 h-70 ma-5"
          variant="outlined"
          color="black"
        >
        Help
      </v-btn>
      </div>
    </RouterLink>
    </v-navigation-drawer>
  

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>Application</v-toolbar-title>
      
    </v-app-bar>

    <v-main>
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    name: "NavBar",
    data: () => ({ drawer: false }),
    components: { RouterLink }
}
  </script>