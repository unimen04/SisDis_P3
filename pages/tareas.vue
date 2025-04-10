<template>
    <v-container>
        <v-text-field label="" v-model="nuevaTarea"></v-text-field>

        <v-btn color="primary" @click="agregarTarea">Agregar Tarea</v-btn>

        <v-data-table :items="items" :headers="headers"></v-data-table>

    </v-container>
</template>
    
    <script setup>
    const headers = [
        { text: 'Name', value: 'name' },
        { text: 'Completada', value: 'completada' },
    ]
    
    items = [
        { name: 'Tarea 1', completada: true },
        { name: 'Tarea 2', completada: false },
        { name: 'Tarea 3', completada: true },
    ]

    const nuevaTarea = ref('')

    function agregarTarea() {
        if (nuevaTarea.value.trim() !== '') {
            items.push({ name: nuevaTarea.value, completada: false });
            nuevaTarea.value = '';
        }
    }
  </script>