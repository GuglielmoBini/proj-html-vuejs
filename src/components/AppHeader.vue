<script>
import Navbar from './Navbar.vue';
export default {
    name: 'AppHeader',
    components: { Navbar }
}
</script>

<template>
    <header>
        <div class="banner">
            <div class="container h-100">
                <div class="d-flex align-items-center justify-content-between h-100">
                    <div>We have a 95% Successful Pass Rate!</div>
                    <div>Give us a call to book your tuition! 1-800-555-555</div>
                </div>
            </div>
        </div>
        <navbar></navbar>
        <div class="container text-white">
            <div id="title">
                <h1>Drive with Avada</h1>
                <p>We offer the finest driving tuition money can buy</p>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    height: 750px;
    background-image: url(../assets/img/homepage-hero-background.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .banner {
        height: 40px;
        background-color: $darkergrey;
        color: $lightgrey;
    }

    #title {
        margin-top: 250px;

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 2rem;
        }
    }
}
</style>