import { createApp } from 'vue'
import App from '@/pages/portfolio/Portfolio.vue'
import { createPinia } from 'pinia'
import { getDomain } from './libraries'
import { setDefaultOptions } from 'date-fns'
import { getLocale } from './libraries/helpers/dates/Dates'
import { loadLanguageAsync } from './libraries/helpers/languages/languagesLocalizator'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.mount('#app')

export const languageLocale = getDomain.getLanguageLocale()

setDefaultOptions({ locale: getLocale(languageLocale), weekStartsOn: 0 })

loadLanguageAsync(languageLocale)
