<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!-- Contenido del drawer -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Mi Aplicación</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- Aquí se renderiza el contenido de las páginas -->
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>