<script></script>

<template>
    <!-- footer bottom -->
    <section id="footer-bottom">
        <div class="container h-100">
            <div class="d-flex align-items-center justify-content-between h-100">
                <!-- copyright -->
                <p class="m-0">© Copyright 2012 - 2020 | Avada Theme by <a href="#">ThemeFusion</a> | All Rights
                    Reserved |
                    Powered by
                    <a href="#">WordPress</a>
                </p>
                <!-- socials -->
                <ul class="d-flex p-0 m-0">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

#footer-bottom {
    height: 120px;
    background-color: $darkergrey;
    color: $lightgrey;

    p {
        font-size: 0.9rem;
    }

    a {
        color: $green;
        text-transform: capitalize;
        padding: 3px;

    }

    i {
        color: $white;
        padding-left: 15px;
    }
}
</style>