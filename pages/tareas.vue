<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <h1>Tareas</h1>

                <tuna />

                <TareaItem />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import tuna from '@/components/tuna.vue'
    import TareaItem from '~/components/TareaItem.vue';

</script>