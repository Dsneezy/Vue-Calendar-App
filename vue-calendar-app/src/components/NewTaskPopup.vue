<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { ref } from 'vue'

// Reactive variable to control the dialogue visibility
const visible = ref(false)

</script>

<template>
  <Dialog visible header="Create New Task" modal closable>
  </Dialog>
</template>

<style scoped>

</style>