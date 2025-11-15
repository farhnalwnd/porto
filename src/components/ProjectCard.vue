<script setup></script>
<template>
  <div class="cardparent">
    <div class="img-container aspect-square w-full lg:w-2/3">
      <slot name="images"></slot>
    </div>
    <div class="w-full">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';
.cardparent {
  @apply bg-neutral-700 w-80 rounded-2xl flex flex-col items-center-safe justify-center-safe p-4 space-y-4 h-96;
  @apply md:w-96 md:h-96;
  @apply lg:w-5/6 lg:flex lg:py-4 lg:flex-row lg:items-center lg:justify-center lg:h-fit lg:gap-6;
  @apply xl:p-9;
}
.img-container {
  @apply w-full aspect-square overflow-hidden rounded-lg box-border lg:m-0;
  @apply hover:scale-105 hover:shadow-lg transition duration-300;
}
</style>
