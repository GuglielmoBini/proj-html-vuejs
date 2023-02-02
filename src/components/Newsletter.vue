<script>
import ColoredButton from './ColoredButton.vue';
export default {
    name: 'Newsletter',
    components: { ColoredButton }
}
</script>

<template>
    <section id="newsletter">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-6 text-center">
                    <h2 class="mb-4">SIgn up to our newsletter</h2>
                    <form>
                        <div class="mb-4">
                            <input type="email" class="form-control">
                        </div>
                        <colored-button :inForm="true" label="Subscribe" class="green-button w-100"></colored-button>
                        <p>(We do not share your data with anybody, and only use it for its intended purpose)</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

// newsletter
#newsletter {
    padding: 100px 0;
    background-image: url(../assets/img/newsletter_background.jpg);
    @include bg-image;

    p {
        color: $lightgrey;
        padding-top: 30px;
    }
}
</style>