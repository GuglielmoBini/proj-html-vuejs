<script>
export default {
    name: 'TransparentCard',
}
</script>

<template>
    <div class="ts-card text-center">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.ts-card {
    padding: 30px;
}
</style>