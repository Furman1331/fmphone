import { createApp } from 'vue';
import { createPinia } from 'pinia';

//@ts-ignore
import App from './app.vue';
import router from './router';

import "./styles/global.less";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
