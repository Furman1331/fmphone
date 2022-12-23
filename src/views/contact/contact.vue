<template lang="pug" src="./contact.pug" />
<style lang="less" src="./contact.less" scoped />
<script lang="ts">
import { RouteName } from '@/router/router-names.enum';
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            RouteName,
        }
    },
    methods: {
        backToHome() {
            this.$router.push({ name: RouteName.home });
        },
        isSelected(routeName: RouteName) {
            return this.$route.name = routeName;
        }
    }
})
</script>

