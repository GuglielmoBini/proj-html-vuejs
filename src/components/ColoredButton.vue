<script>
export default {
    name: 'Button',
    props: {
        label: String,
        class: String
    }
}
</script>

<template>
    <a :class="class" href="#">{{ label }}</a>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.green-button,
.grey-button {
    border-radius: 25px;
}

.green-button {
    background-color: $green;
    border: 4px solid $green;
    transition: background-color 0.5s;

    &:hover {
        background-color: $white;
    }
}

.grey-button {
    color: $lightgrey;
    border: 4px solid $lightgrey;
}
</style>