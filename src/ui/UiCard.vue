<template>
  <div class="card glass" :class="rootClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ rootClass?: string }>()
</script>
