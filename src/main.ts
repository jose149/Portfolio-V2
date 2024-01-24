import { createApp } from 'vue'
import App from '@/pages/portfolio/Portfolio.vue'
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App)

app.use(pinia);
app.mount('#app')
