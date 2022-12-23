<template lang="pug" src="./info-bar.pug" />
<style lang="less" src="./info-bar.less" scoped />
<script lang="ts">
import { defineComponent } from 'vue';

import { DateTime } from "luxon";

interface Data {
    interval: any
    currentTime: string
}

export default defineComponent({
    data(): Data {
        return {
            interval: null,
            currentTime: "",
        }
    },
    methods: {
        getTime() {
            this.currentTime = DateTime.now().toFormat("HH:mm");
        }
    },
    created() {
        this.interval = setInterval(this.getTime, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
})
</script>

