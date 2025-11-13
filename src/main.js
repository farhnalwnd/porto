import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ProjectSection from './ProjectSection.vue'
import skillSection from './skillSection.vue'

const app = createApp(ProjectSection)
const skillSectionApp = createApp(skillSection)

app.use(createPinia())

app.mount('#project')
skillSectionApp.mount('#skill')
