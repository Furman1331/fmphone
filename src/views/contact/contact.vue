<template lang="pug" src="./contact.pug" />
<script lang="ts">
import importStyle from "@/utils/import-style";
import type { RouteRecordName } from "vue-router";

import { RouteName } from '@/router/router-names.enum';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'contact',
    extends: importStyle,
    data() {
        return {
            RouteName,
        }
    },
    computed: {
        currentRouteName(): RouteRecordName | null | undefined {
            return this.$route.name;
        }
    },
    methods: {
        backToHome() {
            this.$router.push({ name: RouteName.home });
        },
    },
})
</script>

