<script setup>
defineProps({
  datas: Array,
})
</script>
<template>
  <div class="card" v-for="data in datas" :key="data.id">
    <div class="bg-amber-200 rounded-full flex items-center justify-center w-24 h-24 mb-4">
      <img :src="data.icon" :alt="data.alt" class="w-16 h-16 scale-90" />
    </div>
    <h3 class="text-xl font-semibold mb-2">{{ data.title }}</h3>
    <h3 class="text-amber-200 text-center">{{ data.description }}</h3>
  </div>
</template>
<style scoped>
@reference 'tailwindcss';
.card {
  @apply flex flex-col w-80 bg-neutral-700 items-center justify-center rounded-xl p-4 m-3 shadow-md shadow-amber-200 space-x-3 space-y-3 hover:shadow-lg hover:scale-105 transition duration-300;
  @apply md:w-sm;
  @apply lg:w-md;
}
</style>
