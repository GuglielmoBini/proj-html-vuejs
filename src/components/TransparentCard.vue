<script>
import ColoredButton from './ColoredButton.vue';
export default {
    name: 'TransparentCard',
    components: { ColoredButton },
    props: {
        img: String,
        course: String,
        label: String,
        Class: String
    }
}
</script>

<template>
    <div class="ts-card text-center">
        <img class="img-fluid" :src="img" :alt="course">
        <h4 class="my-4">{{ course }}</h4>
        <colored-button :label="label" :class="Class"></colored-button>
    </div>
</template>

<style lang="scss" scoped>
.ts-card {
    padding: 30px 0 30px 30px;
}
</style>