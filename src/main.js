import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/server'

import App from '@/App.vue'

const head = createHead()
const app = createApp(App)

app.use(head)
app.use(createPinia())

app.mount('#app')
