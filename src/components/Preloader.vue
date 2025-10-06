<template>
  <transition name="fade">
    <div v-if="visible" class="preloader d-flex align-items-center justify-content-center">
      <div class="spinner" role="status" aria-label="Loading"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const visible = ref(true)

onMounted(() => {
  setTimeout(() => { visible.value = false }, 800)
})
</script>
