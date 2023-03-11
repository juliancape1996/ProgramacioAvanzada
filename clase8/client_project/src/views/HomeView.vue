<template>
  <Nav>
    <HelloWorld/>
  </Nav>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import Nav from '../components/Nav.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    Nav
  },
});
</script>
