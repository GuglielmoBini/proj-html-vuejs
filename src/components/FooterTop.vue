<script>
import { courses } from '../data';
export default {
    name: 'FooterTop',
    data() {
        return { courses }
    }
}
</script>

<template>
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
                        <li class="d-flex">
                            <span><i class="fa-solid fa-house-chimney"></i></span>
                            <span>12345 North Main Street, New York, NY 555555</span>
                        </li>
                        <li class="d-flex">
                            <span><i class="fa-solid fa-phone"></i></span>
                            <span>1.800.555.6789</span>
                        </li>
                        <li class="d-flex">
                            <span><i class="fa-regular fa-envelope"></i></span>
                            <span>info@your-domain.com</span>
                        </li>
                        <li class="d-flex">
                            <span><i class="fa-solid fa-link"></i></span>
                            <span>Theme-Fusion.com</span>
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
                <div class="col px-5 d-flex align-items-start justify-content-center mt-5">
                    <!-- <figure>
                        <img src="../assets/img/labels-200x44.png" alt="grid">
                    </figure> -->
                    <a href="#" class="green-button">book now</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

#footer-top {
    padding-top: 50px;
    height: 450px;
    background-image: url(../assets/img/footer-background-color.jpg);
    @include bg-image;
    color: $lightgrey;

    h4 {
        color: $white;
        margin-bottom: 20px;
    }

    .contacts li {
        margin-bottom: 30px;

        i {
            margin-right: 20px;
        }
    }

    .courses li {
        margin-bottom: 20px;
        color: $green;

        a {
            color: $green;
            text-transform: capitalize;
            font-size: 1.1rem;
        }
    }
}
</style>