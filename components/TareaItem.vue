<script setup>
    import { useTareaStore } from '~/stores/TareaStore'
    import {storeToRefs} from 'pinia'
    import { onMounted, ref } from 'vue'

    const tareaStore = useTareaStore()
    const { tareas } = storeToRefs(tareaStore)

    const nuevaTarea = ref('')

    onMounted(() => {
     tareaStore.cargarTareas() // Carga las tareas desde Firestore al montar el componente
    })

    const agregarTarea = () => {
        tareaStore.agregarTarea(nuevaTarea.value)
        nuevaTarea.value = '' // Limpia el campo de entrada después de agregar la tarea
    }

    const eliminarTarea = (index) => {
        tareaStore.eliminarTarea(index)
    }

    const marcarTarea = (id) => {
        tareaStore.marcarTarea(id)
    }
</script>

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
        :key="tarea.id"
      >
        <div class ="d-flex align-center justify-space-between">
          <span
            :class="{ 'tarea-completada': tarea.completado }"
          >
            {{ tarea.nombre }}
          </span>

          <v-checkbox
            v-model="tarea.completado"
            :color = "success"
            class="tarea-checkbox"
            @change="marcarTarea(tarea.id)"
          ></v-checkbox>

        </div>
        <v-list-item-action>

          <v-btn icon color="red" @click="eliminarTarea(tarea.id)" class="ml-3">
            <v-icon>mdi-delete</v-icon>
          </v-btn>

        </v-list-item-action>
      </v-list-item>
    </v-list>
  </template>

<style scoped>
.tarea-completada {
    text-decoration: line-through;
    color: gray;
}
</style>