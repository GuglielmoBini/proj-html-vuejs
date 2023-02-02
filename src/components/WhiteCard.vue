<script>
export default {
    name: 'WhiteCard',
    props: {
        latest: String,
        isLatestNews: Boolean,
        newLabel: String,
        isNew: Boolean,
        class: String,
    }
}
</script>

<template>
    <div class="white-card" :class="class">
        <figure v-if="isNew" class="new-label">
            <img class="img-fluid" :src="newLabel" :alt="newLabel">
        </figure>
        <slot></slot>
        <figure v-if="isLatestNews" class="triangle">
            <img class="img-fluid w-100" :src="latest" :alt="latest">
        </figure>
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

.highlighted {
    padding: 40px 30px 30px 30px;
}

.shadowed {
    box-shadow: 0 20px 30px 2px $lightgrey;
}

.bordered {
    box-shadow: 0 -8px 0 0 $orange, 0 20px 30px 2px $lightgrey;
}

.bordered-news {
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -8px 0 0 $navy, 0 20px 30px 2px $lightgrey;
}

.new-label {
    height: 80px;
    width: 80px;
    position: absolute;
    top: 0;
    left: 0;

    img {
        border-radius: 15px 0 0 0;
    }
}

.triangle {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
}
</style>