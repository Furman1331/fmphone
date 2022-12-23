<template lang="pug" src="./home.pug" />
<style lang="less" src="./home.less" scoped />
<script lang="ts">
import { defineComponent } from 'vue';

import HomeCommonApps from "@/components/home/home-common-apps/home-common-apps.vue";

import { phoneConfig } from '@config/config';

export default defineComponent({
    data() {
        return {
            phoneConfig,
        }
    },
    computed: {
        backgroundImage() {
            return this.phoneConfig.backgroundImage;
        }
    },
    components: { HomeCommonApps }
})
</script>

