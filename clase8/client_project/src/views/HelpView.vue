<template>
    <div>
        <NavBar/>
    </div>
</template>
<script>
    import { defineComponent } from 'vue';
    import NavBar from '../components/Nav.vue'

    export default defineComponent({
    name: 'HelpView',

    components: {
        NavBar,
    },
    });
    
</script>