<script setup>
defineProps({
  tools: Object,
})
</script>

<template>
  <div class="inline-flex items-center">
    <div
      v-for="(toolValue, toolKey) in tools"
      :key="toolKey"
      class="flex items-center justify-center mx-6 cursor-pointer transform transition-all duration-300 lg:filter lg:grayscale lg:hover:grayscale-0 lg:hover:scale-110"
    >
      <p class="text-amber-600">{{ toolValue }}</p>
    </div>
  </div>
</template>

<style scoped></style>
