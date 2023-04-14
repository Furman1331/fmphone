<template lang="pug" src="./info-bar.pug" />
<script lang="ts">
import importStyle from "@/utils/import-style";

import { defineComponent } from 'vue';

import { DateTime } from "luxon";

interface Data {
    interval: any
    currentTime: string
}

export default defineComponent({
    name: 'info-bar',
    extends: importStyle,
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

