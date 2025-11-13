import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ProjectSection from './ProjectSection.vue'

const app = createApp(ProjectSection)

app.use(createPinia())

app.mount('#project')
