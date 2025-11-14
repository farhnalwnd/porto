import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ProjectSection from './ProjectSection.vue'
import skillSection from './skillSection.vue'
import headerSection from './headerSection.vue'
import navSection from './navSection.vue'
import footerSection from './footerSection.vue'
import educationSection from './educationSection.vue'
import aboutSection from './aboutSection.vue'

const app = createApp(ProjectSection)
const skillSectionApp = createApp(skillSection)
const headerSectionApp = createApp(headerSection)
const navSectionApp = createApp(navSection)
const educationSectionApp = createApp(educationSection)
const aboutSectionApp = createApp(aboutSection)
const footerSectionApp = createApp(footerSection)
app.use(createPinia())

app.mount('#project')
skillSectionApp.mount('#skill')
headerSectionApp.mount('#header')
navSectionApp.mount('#nav')
educationSectionApp.mount('#education')
aboutSectionApp.mount('#about')
footerSectionApp.mount('#footer')
