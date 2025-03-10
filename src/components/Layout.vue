<template>

<a-layout style="min-height: 100vh">
    <Sidebar/>
    <a-layout>
        <Header/>
        <a-layout-content style="margin: 16px 16px">
            <slot></slot>
        </a-layout-content>
    </a-layout>
</a-layout>

</template>

<script setup lang="ts" >

import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

</script>

<style>

</style>