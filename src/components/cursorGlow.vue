<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glowRef = ref(null)
const glowSize = 50

const updateGlowPosition = (e) => {
  if (glowRef.value) {
    glowRef.value.style.transform = `translate(${e.clientX - glowSize / 2}px, ${e.clientY - glowSize / 2}px)`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateGlowPosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateGlowPosition)
})
</script>

<template>
  <div
    ref="glowRef"
    class="cursor-glow fixed -z-10 rounded-full pointer-events-none transition-opacity duration-100 animate-pulse"
    :style="{
      width: glowSize + 'px',
      height: glowSize + 'px',
      filter: 'blur(20px)',
      backgroundColor: '#fee685',
      opacity: 0.9,
    }"
  ></div>
</template>

<style scoped>
.cursor-glow {
  top: 0;
  left: 0;
}
</style>
