<script setup>
defineProps({
  sosmed: Array,
})
</script>
<template>
  <div class="inline-flex items-center justify-center">
    <a
      v-for="link in sosmed"
      :key="link.id"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-2 transform transition-all duration-300 scale-90 lg:filter lg:grayscale lg:hover:grayscale-0 lg:hover:scale-110"
    >
      <img :src="link.icon" :alt="link.alt" class="h-8 w-auto" />
    </a>
  </div>
</template>
<style scoped>
@reference 'tailwindcss';
</style>
