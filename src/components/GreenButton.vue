<script>
export default {
    name: 'GreenButton',
    props: {
        label: String
    }
}
</script>

<template>
    <a class="green-button" href="#">{{ label }}</a>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.green-button {
    border-radius: 25px;
    background-color: $green;
    border: 4px solid $green;
    transition: background-color 0.5s;

    &:hover {
        background-color: $white;
    }
}
</style>