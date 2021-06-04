import { createApp } from 'vue'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'
import App from './App.vue'
import { store } from './store'

const app = createApp(App)

app.use(store)
app.mount('#app')
