<script setup></script>
<template>
  <div class="card">
    <div class="bg-amber-200 rounded-full flex items-center justify-center w-24 h-24 mb-4">
      <slot name="icon"></slot>
    </div>
    <slot name="skill"></slot>
    <slot name="description"></slot>
  </div>
</template>
<style scoped>
@reference 'tailwindcss';
.card {
  @apply flex flex-col bg-neutral-700 items-center justify-center rounded-xl p-4 m-3 shadow-md shadow-amber-200 space-x-3 space-y-3 hover:shadow-lg hover:scale-105 lg:w-1/4 transition duration-300;
}
</style>
