<template lang="pug" src="./home.pug" />
<script lang="ts">
import { defineComponent } from 'vue';

import HomeCommonApps from "@/components/home/home-common-apps/home-common-apps.vue";

import { config } from '@config/config';
import importStyle from '@/utils/import-style';

export default defineComponent({
    name: 'home',
    extends: importStyle,
    data() {
        return {
            config,
        }
    },
    computed: {
        backgroundImage() {
            return this.config.backgroundImage;
        }
    },
    components: { HomeCommonApps }
})
</script>

