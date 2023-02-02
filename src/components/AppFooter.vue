<script>
import { contacts, courses } from '../data';
import ColoredButton from './ColoredButton.vue';
export default {
    name: 'AppFooter',
    data() {
        return { contacts, courses }
    },
    components: { ColoredButton }
}
</script>

<template>
    <!-- footer -->
    <footer>
        <!-- footer top -->
        <section id="footer-top">
            <div class="container h-100">
                <!-- columns -->
                <div class="row row-cols-4 h-100">
                    <!-- col message -->
                    <div class="col px-5">
                        <figure>
                            <a href="#" class="p-0"><img src="../assets/img/logo/avada-drivers-logo-2x-300x58.png"
                                    alt="logo" class="img-fluid"></a>
                        </figure>
                        <p class="mt-4">Avada Driving School is the right choice for experienced drivers looking for a
                            refresher
                            course, or the brand new driver wanting to pass first time.</p>
                    </div>
                    <!-- col details -->
                    <div class="col px-5 contacts">
                        <h4>CONTACT DETAILS</h4>
                        <ul class="p-0">
                            <li v-for="contact in contacts" class="d-flex">
                                <span v-html="contact.icon"></span>
                                <span>{{ contact.text }}</span>
                            </li>
                        </ul>
                    </div>
                    <!-- col courses -->
                    <div class="col px-5 courses">
                        <h4>COURSES</h4>
                        <ul class="p-0">
                            <li v-for="course in courses" :key="course">
                                <span><i class="fa-regular fa-circle-right"></i></span>
                                <a href="#">{{ course }}</a>
                            </li>
                        </ul>
                    </div>
                    <!-- col book -->
                    <div class="col px-5 d-flex flex-column align-items-center">
                        <figure class="mb-5">
                            <img src="../assets/img/footer-ad-grid-200x178.png" alt="grid">
                        </figure>
                        <colored-button label="book now" class="green-button"></colored-button>
                    </div>
                </div>
            </div>
        </section>
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
            <a class="return-to-top" href="#"><i class="fa-solid fa-chevron-up fa-beat p-0"></i></a>
        </section>
    </footer>
</template>

<style lang="scss">
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

#footer-top,
#footer-bottom {
    color: $lightgrey;

    a {
        text-transform: capitalize;
    }
}

#footer-top {
    padding-top: 50px;
    height: 450px;
    background-image: url(../assets/img/footer-background-color.jpg);
    @include bg-image;

    h4,
    .courses li {
        margin-bottom: 20px;
    }

    h4 {
        color: $white;
    }

    .contacts li {
        margin-bottom: 30px;

        i {
            margin-right: 20px;
        }
    }

    .courses li {
        color: $orange;

        a {
            color: $orange;
            font-size: 1.1rem;
        }
    }
}

#footer-bottom {
    height: 120px;
    background-color: $darkergrey;
    position: relative;

    p {
        font-size: 0.9rem;
    }

    a {
        color: $orange;
        padding: 3px;

    }

    i {
        color: $white;
        padding-left: 15px;
    }

    .return-to-top {
        background-color: $darkergrey;
        padding: 20px;
        position: absolute;
        bottom: 0;
        right: 50px;
    }
}
</style>