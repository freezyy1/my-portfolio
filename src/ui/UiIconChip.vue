<template>
  <div class="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-3 border small" :class="rootClass">
    <i :class="icon"></i><slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ icon: string; rootClass?: string }>()
</script>
