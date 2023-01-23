import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTriangleExclamation, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as RegularHeart } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'
import router from './router'

library.add(faBars, faTriangleExclamation, faCartShopping, faHeart, RegularHeart)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')