import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/home/home.vue";
import Phone from "../views/phone/phone.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/phone',
            name: "phone",
            component: Phone
        }
    ]
})

export default router
