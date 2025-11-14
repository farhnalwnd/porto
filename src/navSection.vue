<script></script>
<template>
  <div class="w-full h-11 max-h-32 bg-amber-300 py-5">
    <div class="w-full h-full invisible md:visible">
      <div
        class="container max-w-5xl flex-inline space-x-8 justify-center items-center mx-auto px-4 h-full flex -translate-x-3"
      >
        <a href="#project">Project</a>
        <a href="#skill">Skills</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@reference 'tailwindcss';
.container a {
  @apply relative inline-block py-2;
  @apply after:content-[''];
  @apply after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-linear-to-r after:from-neutral-400 after:via-neutral-800 after:to-neutral-400;
  @apply after:transform after:scale-x-0 after:origin-center;
  @apply after:transition-transform after:duration-300;
  @apply hover:after:scale-x-100;
  @apply text-neutral-800 hover:text-neutral-900 hover:font-bold hover:scale-105;
}
</style>
