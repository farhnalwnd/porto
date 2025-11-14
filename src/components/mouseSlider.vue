<script setup>
// 1. Semua import diletakkan di dalam <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/main.css'
import { Mousewheel, Pagination } from 'swiper/modules'
import textMarque from './textMarque.vue'

defineProps({
  datas: Array,
})

const modules = [Mousewheel, Pagination]
</script>

<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="data in datas" :key="data.id">
      <div class="py-4 h-full text-center flex flex-col justify-end gap-7">
        <div class="w-full">
          <h3 class="text-2xl font-bold py-2 text-pretty">{{ data.company }}</h3>
          <p class="text-lg py-2 text-pretty">{{ data.division }}</p>
          <p class="text-sm text-gray-400 py-2 text-pretty">{{ data.period }}</p>
        </div>
        <div>
          <h1 class="text-sm sm:text-lg py-2 text-amber-400">
            Hard Skills and Soft Skills Received:
          </h1>
          <div
            class="w-full py-2.5 bg-gray-100 rounded-lg inset-shadow-sm inset-shadow-amber-400 text-white overflow-hidden flex"
          >
            <div class="animate-marquee-scroll shrink-0 whitespace-nowrap">
              <textMarque :tools="data.tools" class="inline-block" />
              <textMarque :tools="data.tools" class="inline-block" />
              <textMarque :tools="data.tools" class="inline-block" />
            </div>
            <div class="animate-marquee-scroll shrink-0 whitespace-nowrap" aria-hidden="true">
              <textMarque :tools="data.tools" class="inline-block" />
              <textMarque :tools="data.tools" class="inline-block" />
              <textMarque :tools="data.tools" class="inline-block" />
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
@reference 'tailwindcss';
.mySwiper {
  width: 100%;
  height: 300px;
  @apply max-w-5xl;
}

.swiper-slide {
  border-radius: 10px;
  background-color: #333;
}
</style>
