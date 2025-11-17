<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const typingElement = ref(null)

onMounted(() => {
  const options = {
    strings: ['Fullstack Developer', 'Data Analyst', 'IoT Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  }

  new Typed(typingElement.value, options)
})
</script>
<template>
  <div class="layoutprofile w-full h-[600px] md:h-fit bg-amber-200">
    <div class="container mx-auto px-4 pt-4 pb-0 md:pt-20 lg:max-w-5xl">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <!-- text -->
        <div class="mb-8 md:mb-0 md:w-1/2">
          <h1 class="mb-2">Hello i'm a</h1>

          <p class="text-3xl font-extrabold text-neutral-700 mb-4 uppercase">
            <span ref="typingElement"></span>
          </p>
          <p class="text-neutral-800 font-semibold mb-6 text-pretty">
            I'm Farhan Alwanda, a Technology Solutions Developer. Specializations: Smart Device
            Assembly, Data Analysis, and Web Application Development.
          </p>
          <a
            href="#footer"
            class="inline-block animate-bounce hover:animate-none bg-linear-to-br from-neutral-600 from-5% to-neutral-800 to-70% px-5 py-2 rounded-full shadow-md hover:shadow-md hover:scale-105 hover:bg-linear-to-br hover:from-neutral-700 hover:to-neutral-900 transition duration-300"
          >
            <span class="font-semibold text-amber-300">Reach me out</span></a
          >
        </div>
        <!-- image -->
        <div class="md:w-1/2 flex justify-center py-5 z-10">
          <div class="w-64 h-64">
            <img
              src="/header.png"
              alt="Profile Image"
              class="w-full h-full aspect-square object-cover sm:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- waves -->
  <div class="-mt-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="drop-shadow-[0px_7px_3px] drop-shadow-amber-200"
    >
      <path
        fill="#fd9a00"
        fill-opacity="1"
        d="M0,128L80,122.7C160,117,320,107,480,101.3C640,96,800,96,960,101.3C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>
<style scoped>
@reference 'tailwindcss';
.layoutprofile {
  @apply bg-linear-to-b from-amber-300 from-15% to-amber-500 to-75%;
}
</style>
