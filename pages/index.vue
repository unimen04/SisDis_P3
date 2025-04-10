
<template>
    <v-btn color="primary" @click="mostrarImagen">
        Pulsa para pez
    </v-btn>

    <v-btn color="primary" @click="tareas">
        Lista de tareas
    </v-btn>

    Привет, как дела!!!

    <div class ="text-grey text-center">
        <p>Soy un recurso adicional!</p>
        <p>Me puedes usar para lo que quieras</p>
    </div>

    <img v-if="mostrar" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Bluefin-big.jpg" alt="Bluefin Tuna" width="300" height="200">
</template>

<script setup>

const mostrar = ref(false)
function mostrarImagen() {
    mostrar.value=!mostrar.value
}

function tareas() {
    window.location.href = '/tareas'
}

</script>