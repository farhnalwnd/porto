<script setup></script>
<template>
  <div class="cardparent">
    <div class="img-container w-full lg:w-2/3">
      <slot name="images"></slot>
    </div>
    <div class="w-full lg:w-1/3">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';
.cardparent {
  @apply bg-amber-200 rounded-2xl flex flex-col items-center-safe justify-center-safe p-4 space-y-4 overflow-hidden h-96 lg:h-fit lg:flex-row lg:space-y-0 lg:space-x-4;
}
.img-container {
  @apply w-full box-border items-center justify-center flex;
}
</style>
