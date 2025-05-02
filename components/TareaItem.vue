<template>
    <v-container>
        <v-text-field
            v-model="nuevaTarea"
            outlined
        ></v-text-field>

        <v-btn color="primary" @click="agregarTarea">
            Agregar
        </v-btn>
    </v-container>
    <v-list>
      <v-list-item
        v-for="(tarea, index) in tareas"
        :key="index"
      >
        <v-list-item-content>
          <v-list-item-title>{{ tarea.name }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
            <v-btn icon :color="tarea.completado ? 'green' : 'red'" @click="marcarTarea(index)">
                <v-icon>{{ tarea.completado ? 'mdi-check' : 'mdi-close'}}</v-icon>
            </v-btn>

          <v-btn icon color="red" @click="eliminarTarea(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>

        </v-list-item-action>
      </v-list-item>
    </v-list>
  </template>
  
  <script setup>
    import { ref } from 'vue'

    const tareas = ref([
        { name: 'tarea 1', completado: false },
        { name: 'tarea 2', completado: false },

    ])

    const nuevaTarea = ref('')

    function agregarTarea(){
        if(nuevaTarea.value.trim() !== ''){
            tareas.value.push({name: nuevaTarea.value, completado: false})
            nuevaTarea.value = ''
        }
    }

    function eliminarTarea(index){
        tareas.value.splice(index,1)
    }

    function marcarTarea(index){
        tareas[index].completado = !tareas[index].completado
    }
</script>