import { RouteName } from './router-names.enum';
import { createRouter, createWebHistory } from 'vue-router';

import { contactRoutes } from './contact.routes';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: RouteName.home,
            component: () => import("@/views/home/home.vue")
        },
        ...contactRoutes
    ]
})

export default router
