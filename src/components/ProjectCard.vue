<script setup></script>
<template>
  <div class="cardparent">
    <div>
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
  @apply bg-amber-200 rounded-2xl grid grid-rows-2 gap-2;
}
</style>
