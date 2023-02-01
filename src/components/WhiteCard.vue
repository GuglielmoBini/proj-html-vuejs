<script>
export default {
    name: 'WhiteCard',
    props: {
        isNew: String,
        shadow: String
    }
}
</script>

<template>
    <div class="white-card" :class="shadow">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.white-card {
    background-color: $white;
    border-radius: 25px;
    padding: 40px;
}

.shadowed {
    box-shadow: 0 20px 30px 2px $lightgrey;
}
</style>