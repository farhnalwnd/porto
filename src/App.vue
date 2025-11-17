<script setup>
import NavSection from '@/views/navSection.vue'
import HeaderSection from '@/views/headerSection.vue'
import AboutSection from '@/views/aboutSection.vue'
import EducationSection from '@/views/educationSection.vue'
import WorkSection from '@/views/workSection.vue'
import SkillSection from '@/views/skillSection.vue'
import ProjectSection from '@/views/ProjectSection.vue'
import FooterSection from '@/views/footerSection.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <header>
    <div id="nav">
      <NavSection />
    </div>
    <div id="header">
      <HeaderSection />
    </div>
  </header>
  <main>
    <div id="about">
      <AboutSection />
    </div>
    <div id="education">
      <EducationSection />
    </div>
    <div id="work">
      <WorkSection />
    </div>
    <div id="skill">
      <SkillSection />
    </div>
    <div id="project">
      <ProjectSection />
    </div>
  </main>
  <footer>
    <div id="footer">
      <FooterSection />
    </div>
  </footer>
  <SpeedInsights />
</template>
