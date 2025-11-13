<script setup></script>
<template>
  <div class="cardparent">
    <div class="img-container">
      <slot name="images"></slot>
    </div>
    <div>
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';
.cardparent {
  @apply bg-amber-200 rounded-2xl flex flex-col items-center-safe p-4 space-y-4 overflow-hidden;
}
.img-container {
  @apply w-96 p-4 border-2 justify-center;
}
</style>
