<script setup>
import { ref } from 'vue'
import mouseSlider from './components/mouseSlider.vue'

const workDatas = ref([
  {
    id: 1,
    company: 'PT.Sinar Meadow International Indonesia',
    img: '/smii.png',
    division: 'Internship - Web Developer',
    period: 'april 2025 - Present',
    tools: {
      1: 'laravel',
      2: 'Tailwind CSS',
      3: 'Fillament',
      4: 'Alpine JS',
      5: 'livewire',
      6: 'discipline',
      7: 'teamwork',
    },
  },
  {
    id: 2,
    company: 'PT.SGMW Motor Indonesia (Wuling Motors)',
    img: '/smii.png',
    division: 'Internship - IT System',
    period: 'september 2024 - december 2024',
    tools: {
      1: 'excel',
      2: 'figma',
      3: 'intrenal backend system',
      4: 'balsamiq',
      5: 'tableau',
      6: 'communication',
      7: 'accountable',
    },
  },
  {
    id: 3,
    company: 'GaoTek Inc.',
    img: '/icon/ig.svg',
    division: 'Internship - Web Developer',
    period: 'august 2024 - october 2024',
    tools: {
      1: 'wordpress',
      2: 'CSS vanilla',
      3: 'teamwork',
      4: 'communication',
      5: 'time management',
    },
  },
])
</script>
<template>
  <div class="container mx-auto px-4 py-12">
    <div class="w-full text-center">
      <h2 class="text-3xl font-bold mb-8">Work Experience</h2>
    </div>
    <mouseSlider :datas="workDatas" />
  </div>
</template>
<style scoped></style>
