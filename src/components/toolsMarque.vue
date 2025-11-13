<script setup>
defineProps({
  tools: Array,
})
</script>

<template>
  <div class="inline-flex items-center">
    <div
      v-for="tool in tools"
      :key="tool.id"
      class="flex items-center justify-center mx-6 cursor-pointer transform transition-all duration-300 lg:filter lg:grayscale lg:hover:grayscale-0 lg:hover:scale-110"
    >
      <img :src="tool.icon" :alt="tool.alt" class="h-12 w-auto" />
    </div>
  </div>
</template>

<style scoped></style>
