<template lang="pug" src="./app.pug" />
<script lang="ts">
import importStyle from "./utils/import-style";

import InfoBar from './components/info-bar/info-bar.vue';

import PhoneNavigation from "@/components/phone-navigation/phone-navigation.vue";

import { config, type PhoneTypesLower } from './config/config';

export default {
    name: "app",
    extends: importStyle,
    data() {
        return {
            config
        }
    },
    computed: {
        frameImage() {
            return this.config.frameImage;
        }
    },
    components: { InfoBar, PhoneNavigation }
}
</script>
