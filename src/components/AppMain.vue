<script>
import WhiteCard from './WhiteCard.vue';
import TransparentCard from './TransparentCard.vue';
import ColoredButton from './ColoredButton.vue';
import LessonForm from './LessonForm.vue';
import { carCourses, instructors, testimonials } from '../data';
export default {
    name: 'AppMain',
    data() {
        return { carCourses, instructors, testimonials }
    },
    components: { ColoredButton, LessonForm, WhiteCard, TransparentCard }
}
</script>

<template>
    <main>
        <!-- behind the wheel -->
        <section id="behind-the-wheel">
            <div class="container h-100">
                <div class="row justify-content-between align-items-center h-100">
                    <div class="col-6">
                        <h2 class="mb-5">Get Behind The Wheel</h2>
                        <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor
                            sapien id
                            cursus. Aliquam maximus turpis in vehicula semper.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id
                            cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit
                            lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus
                            turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla
                            nibh.</p>
                    </div>
                    <div class="col-5 text-center d-flex flex-column align-items-center form">
                        <white-card shadow="shadowed">
                            <h3>First Lesson Free!</h3>
                            <p class="my-5">When you make a block booking with us your first lesson is included free.
                            </p>
                            <lesson-form></lesson-form>
                        </white-card>
                    </div>
                </div>
            </div>
        </section>
        <!-- learning to drive -->
        <section id="learning">
            <div class="container h-100">
                <div class="row row-cols-2 text-white h-100">
                    <div class="d-flex flex-column justify-content-center">
                        <h2>Start Learning to Drive Today</h2>
                        <p>Give us a call to schedule your first driving lesson</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-end">
                        <span><i class="fa-solid fa-phone-flip"></i></span>
                        <span class="mx-4">1-800-555-555</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- courses -->
        <section id="courses">
            <div class="container h-100">
                <div class="row justify-content-between h-100 pt-5">
                    <div class="col-4 text-center course">
                        <white-card shadow="shadowed" :isNew="true">
                            <h3 class="mb-5">Courses</h3>
                            <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices
                                auctor sapien id
                                cursus. Aliquam maximus turpis in vehicula semper.</p>
                            <colored-button label="course information" class="green-button"></colored-button>

                        </white-card>
                    </div>
                    <div class="col-8">
                        <div class="row row-cols-3 h-100">
                            <div v-for="carCourse in carCourses" class="col">
                                <transparent-card :img="carCourse.src" :course="carCourse.course" label="learn more"
                                    Class="grey-button"></transparent-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%"
                height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#e4eaed;padding:0;">
                <path d="M-1 -1 L50 99 L101 -1 Z"></path>
            </svg>
        </section>
        <!-- rating -->
        <section id="rating">
            <div class="container">
                <div class="row">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

main {
    min-height: 600px;

    // behind the wheel
    #behind-the-wheel {
        height: 600px;
        position: relative;

        .form {
            position: relative;
            bottom: 70px;
        }

        h2 {
            font-size: 3rem;
        }

        p {
            font-size: 1.1rem;
            color: $lightgrey;
        }

        h3 {
            color: $green
        }
    }

    // learging to drive
    #learning {
        height: 300px;
        background-image: url(../assets/img/horizontal-cta-background.jpg);
        @include bg-image;

        h2 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
        }

        span {
            font-size: 2.5rem;
        }
    }

    // courses
    #courses {
        height: 500px;
        background-image: url(../assets/img/courses/promise-background.jpg);
        @include bg-image-bottom;
        position: relative;

        .course {
            position: relative;
            bottom: 90px;
        }

        p {
            font-size: 1.2rem;
            color: $lightgrey;
        }

        svg {
            position: relative;
            bottom: 0.3%;
        }
    }
}
</style>