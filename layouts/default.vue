<template>
  <v-app id="inspire">
    <!-- Menú lateral -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Inicio"></v-list-item>
        <v-list-item title="Acerca de"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra superior -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Mi Aplicación</v-app-bar-title>
    </v-app-bar>

    <!-- Contenido dinámico de cada página -->
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false) // Controla si el menú lateral está abierto o cerrado
</script>
