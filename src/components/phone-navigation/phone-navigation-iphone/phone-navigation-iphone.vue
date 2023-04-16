<template lang="pug" src="./phone-navigation-iphone.pug" />
<style lang="less" src="./phone-navigation-iphone.less" scoped />
<script lang="ts">
import { RouteName } from '@/router/router-names.enum';

export default {
    computed: {
        shouldShowNavigation(): boolean {
            return this.$route.name !== RouteName.home;
        }
    }
}
</script>

