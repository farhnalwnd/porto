<script setup>
import { ref } from 'vue'
import SosmedLink from '@/components/sosmedLink.vue'

const sosmedLinks = ref([
  {
    id: 1,
    name: 'Instagram',
    url: 'https://www.instagram.com/farhnalwnd/',
    icon: '/icons/ig.svg',
    alt: 'Instagram-farhan-alwanda',
  },
  {
    id: 2,
    name: 'GitHub',
    url: 'https://github.com/farhnalwnd',
    icon: '/icons/github.svg',
    alt: 'GitHub-farhan-alwanda',
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/farhan-alwanda/',
    icon: '/icons/linkedin.svg',
    alt: 'LinkedIn-farhan-alwanda',
  },
  {
    id: 4,
    name: 'email',
    url: 'mailto:raja.farhan.alwanda@gmail.com',
    icon: '/icons/gmail.svg',
    alt: 'Email-farhan-alwanda',
  },
  {
    id: 5,
    name: 'whatsapp',
    url: 'https://wa.me/628978648072',
    icon: '/icons/wa.svg',
    alt: 'WhatsApp-farhan-alwanda',
  },
])

// Fungsi untuk scroll ke atas
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer class="bg-neutral-900 text-neutral-400" id="footer">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 py-10">
        <div class="text-center md:text-left">
          <h3 class="text-3xl font-bold mb-2">Farhan Alwanda</h3>
          <p>Fullstack Developer, IoT & Data Enthusiast</p>
        </div>

        <div class="">
          <p class="text-center pb-2 text-lg font-semibold">Reach me on:</p>
          <div class="shrink-0">
            <SosmedLink :sosmed="sosmedLinks" />
          </div>
        </div>
      </div>

      <hr class="border-neutral-700" />

      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 text-sm">
        <span>© {{ new Date().getFullYear() }} Farhan Alwanda. All Rights Reserved.</span>

        <button @click="scrollToTop" class="hover:text-white transition-colors duration-300">
          Back to Top
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
