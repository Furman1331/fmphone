import { RouteName } from "./router-names.enum";

import type { RouteRecordRaw } from "vue-router";


export const contactRoutes: RouteRecordRaw[] = [
    {
        path: "/contact",
        name: RouteName.contact,
        component: () => import("@/views/contact/contact.vue"),
        children: [
            {
                path: "/last",
                name: RouteName.contactLast,
                component: () => import("@/views/contact/contact-last/contact-last.vue")
            },
            {
                path: "/list",
                name: RouteName.contactList,
                component: () => import("@/views/contact/contact-list/contact-list.vue")
            },
            {
                path: "/keyboard",
                name: RouteName.contactKeyboard,
                component: () => import("@/views/contact/contact-keyboard/contact-keyboard.vue")
            },
            {
                path: "/favourite",
                name: RouteName.contactFavourite,
                component: () => import("@/views/contact/contact-favourite/contact-favourite.vue")
            }
        ]
    }
]
