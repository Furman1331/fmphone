import { createApp } from 'vue';
import { createPinia } from 'pinia';

//@ts-ignore
import App from './app.vue';
import router from './router';
import { i18n } from './i18n';

import "./styles/global.less";

createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .mount('#app');
