<script>
export default {
    name: 'WhiteCard',
    props: {
        isNew: Boolean,
        class: String,
    }
}
</script>

<template>
    <div class="white-card" :class="class">
        <figure v-if="isNew">
            <img class="img-fluid" src="../assets/img/courses/new-corner.jpg" alt="new">
        </figure>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.white-card {
    background-color: $white;
    border-radius: 15px;
    padding: 40px;
    position: relative;
}

.shadowed {
    box-shadow: 0 20px 30px 2px $lightgrey;
}

.bordered {
    box-shadow: 0 -8px 0 0 $green, 0 20px 30px 2px $lightgrey;
}

figure {
    height: 80px;
    width: 80px;
    position: absolute;
    top: 0;
    left: 0;

    img {
        border-radius: 15px 0 0 0;
    }
}
</style>