<script>
export default {
    name: 'Button',
    props: {
        label: String,
        class: String,
        inForm: Boolean
    }
}
</script>

<template>
    <a v-if="!inForm" :class="class" href="#">{{ label }}</a>
    <button v-else :class="class" class="form-button" type="submit">{{ label }}</button>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.green-button,
.grey-button {
    border-radius: 25px;
}

.green-button {
    background-color: $orange;
    border: 4px solid $orange;
    transition: background-color 0.5s;

    &:hover {
        background-color: $white;
    }
}

.grey-button {
    color: $lightgrey;
    border: 4px solid $lightgrey;
}

.form-button {
    color: $white;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        color: $orange;
    }
}
</style>