<template>
  <span class="badge rounded-pill" :class="variantClass"><slot /></span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'solid' | 'subtle' }>(), { variant: 'subtle' })
const variantClass = props.variant === 'solid' ? 'bg-primary' : 'bg-dark-subtle text-dark-emphasis'
</script>
