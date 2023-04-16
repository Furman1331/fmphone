<template lang="pug" src="./contact-keyboard.pug" />
<script lang="ts">
import importStyle from '@/utils/import-style';

export default {
    name: 'contact-keyboard',
    extends: importStyle,
    data() {
        return {
            value: "",
            keys: [
                { value: "1", content: null },
                { value: "2", content: "A B C" },
                { value: "3", content: "D E F" },
                { value: "4", content: "G H I" },
                { value: "5", content: "J K L" },
                { value: "6", content: "M N O" },
                { value: "7", content: "P Q R S" },
                { value: "8", content: "T U V" },
                { value: "9", content: "W X Y Z" },
                { value: "*", content: null },
                { value: "0", content: "+" },
                { value: "#", content: null }
            ]
        }
    },
    methods: {
        insert(value: string) {
            this.value += value;
        }
    }
}
</script>
