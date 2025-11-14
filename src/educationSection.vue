<script setup>
import { ref } from 'vue'

// Data (Anda bisa ganti ini dengan data Anda)
const educationHistory = ref([
  {
    id: 1,
    school: 'President University',
    degree: 'S1 - Information Technology',
    years: '2022 - 2025',
    activities: ['Member of IT Club', 'Volunteer in Tech Events', "Dean's List 2023"],
  },
  {
    id: 2,
    school: 'MAs Diniyyah Pasia',
    degree: 'Nature Science',
    years: '2019 - 2022',
    activities: ['Student Council Member', 'Science Fair Participant'],
  },
  {
    id: 3,
    school: 'MTSs Diniyyah Pasia',
    degree: '-',
    years: '2016 - 2019',
    activities: ['Math Club Member', 'Science Olympiad Winner'],
  },
])
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="w-full flex items-center justify-center">
      <h2 class="text-3xl font-bold text-center mb-12">Riwayat Pendidikan</h2>
    </div>

    <div
      class="max-w-xl lg:max-w-3xl mx-auto bg-neutral-700 rounded-xl p-4 m-3 shadow-md shadow-amber-200 hover:shadow-lg hover:scale-105 transition duration-300"
    >
      <div class="relative border-l-2 border-amber-300 ml-4">
        <div v-for="edu in educationHistory" :key="edu.id" class="mb-8">
          <div class="relative pl-8">
            <div
              class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white"
            ></div>

            <div
              class="transition-all duration-300 lg:flex lg:items-start lg:justify-between lg:gap-6 lg:p-4"
            >
              <div class="grow">
                <h3 class="text-lg font-bold">
                  {{ edu.school }}
                </h3>
                <p class="">
                  {{ edu.degree }}
                </p>

                <ul class="mt-2 list-disc list-inside text-sm">
                  <li v-for="activity in edu.activities" :key="activity">
                    {{ activity }}
                  </li>
                </ul>
              </div>

              <div class="shrink-0 mt-2 lg:mt-0">
                <p class="text-sm lg:text-base lg:text-right">
                  {{ edu.years }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Anda bisa menambahkan style khusus di sini jika perlu */
</style>
