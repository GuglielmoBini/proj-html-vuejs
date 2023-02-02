<script>
export default {
    name: 'Carousel',
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        goToI(target) {
            this.currentIndex = target;
        },
    },
    props: {
        options: Array,
    },
};
</script>
<template>
    <div class="container">
        <div class="carousel">
            <div class="gallery">
                <figure v-for="(option, i) in options" v-show="i === currentIndex">
                    <img :src="option.src" :alt="option.name" class="img-fluid">
                    <figcaption>
                        <p><i>{{ option.text }}</i></p>
                        <h3 class="my-5">{{ option.name }}</h3>
                    </figcaption>
                </figure>
            </div>
            <div class="dots">
                <i v-for="(option, i) in options" :title="option.name" @click="goToI(i)" class="fa-circle mx-1"
                    :class="i === currentIndex ? 'fa-solid' : 'fa-regular'"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.carousel {
    padding: 0 300px;

    figure img {
        height: 150px;
        width: 150px;
        margin: 50px 0;
    }

    .dots i {
        font-size: 0.8rem;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>