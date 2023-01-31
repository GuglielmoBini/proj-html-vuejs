<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
</template>

<style lang="scss">
// importo style.scss
@use './assets/scss/style.scss';
</style>