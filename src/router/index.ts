import { createRouter, createWebHistory } from 'vue-router';

import { RouteName } from './router-names.enum';

import Home from "../views/home/home.vue";
import Contact from "../views/contact/contact.vue";

import ContactLast from "../views/contact/contact-last/contact-last.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: RouteName.home,
            component: Home
        },
        {
            path: '/contact',
            name: RouteName.contact,
            component: Contact,
            children: [
                {
                    path: '/last',
                    name: RouteName.contactLast,
                    component: ContactLast,
                }
            ]
        }
    ]
})

export default router
