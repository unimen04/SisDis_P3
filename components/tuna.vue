<template>
    <v-btn color="primary" @click="mostrarPez">
        Pulsa para pez
    </v-btn>

    <img v-if="mostrar" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Bluefin-big.jpg" alt="Bluefin Tuna" width="300" height="200">
</template>

<script setup>
    import { ref } from 'vue'
    
    const mostrar = ref(false)
    function mostrarPez() {
        mostrar.value=!mostrar.value
    }

</script>