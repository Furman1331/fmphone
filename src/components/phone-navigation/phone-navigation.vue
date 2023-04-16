<template lang="pug" src="./phone-navigation.pug" />
<style lang="less" src="./phone-navigation.less" scoped />
<script lang="ts">
import { config } from '@/config/config';

import PhoneNavigationIphone from "./phone-navigation-iphone/phone-navigation-iphone.vue";
import PhoneNavigationSamsung from "./phone-navigation-samsung/phone-navigation-samsung.vue";

export default {
    computed: {
        component() {
            return config.type === "IPHONE" ? PhoneNavigationIphone : PhoneNavigationSamsung;
        }
    }
}
</script>
