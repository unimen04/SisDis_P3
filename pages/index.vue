
<template>
    

    <v-btn color="primary" @click="tareas">
        Lista de tareas
    </v-btn>

    Привет, как дела!!!

    <div class ="text-grey text-center">
        <p>Soy un recurso adicional!</p>
        <p>Me puedes usar para lo que quieras</p>
    </div>

    <tuna />

</template>

<script setup>

import tuna from '@/components/tuna.vue'

function tareas() {
    window.location.href = '/tareas'
}

</script>