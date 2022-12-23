<template lang="pug" src="./app.pug" />
<style lang="less" src="./app.less" scoped />
<script lang="ts">
import { defineComponent } from 'vue';

import InfoBar from './components/info-bar/info-bar.vue';

import { phoneConfig } from './config/config';

export default defineComponent({
    data() {
        return {
            phoneConfig
        }
    },
    computed: {
        frameImage() {
            return this.phoneConfig.frameImage;
        }
    },
    components: { InfoBar }
})
</script>
