import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/themify/themify.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar)
app.mount('#app')
