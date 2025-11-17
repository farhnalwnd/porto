<script setup>
import Aos from 'aos'
import 'aos/dist/aos.css'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  Aos.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: false,
    offset: 120,
  })
})
onUnmounted(() => {
  Aos.refresh()
})
</script>

<template>
  <div class="container mx-auto px-4 py-12 -mt-5 xl:-mt-32">
    <div class="w-full flex items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="ease-out-back"
        class="grid w-fit max-w-5xl items-center justify-items-center-safe md:flex md:flex-row gap-6 bg-neutral-700 p-6 rounded-lg shadow-lg overflow-hidden"
      >
        <div class="relative shrink-0">
          <img
            src="/bg-foto.jpg"
            alt="full-body-image"
            data-aos="zoom-in"
            class="w-full h-auto max-h-[500px] max-w-[460px] object-cover rounded-lg shadow-lg"
          />
          <div class="absolute bottom-0">
            <img
              src="/full-body.png"
              alt="full-body-image"
              data-aos="fade-up"
              data-aos-delay="300"
              class="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div class="md:flex-non">
          <h2 data-aos="fade-left" class="text-3xl font-bold mb-4">About Me</h2>
          <p data-aos="fade-left" data-aos-delay="100" class="mb-4 xl:text-lg text-pretty">
            Hello! I'm <strong>Farhan Alwanda</strong>, a passionate developer with a love for
            creating dynamic and responsive web applications. With a background in web development,
            data analysis, and IoT development. I enjoy turning complex problems into simple,
            beautiful, and intuitive designs.
          </p>
          <p data-aos="fade-left" data-aos-delay="200" class="text-pretty">
            When I'm not coding, you'll find me exploring the latest tech trends, creating some
            projects, or indulging in my hobbies like playing basketball or running and also hanging
            out with friends. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
