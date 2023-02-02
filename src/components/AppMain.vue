<script>
import WhiteCard from './WhiteCard.vue';
import TransparentCard from './TransparentCard.vue';
import ColoredButton from './ColoredButton.vue';
import LessonForm from './LessonForm.vue';
import Carousel from './Carousel.vue';
import Newsletter from './Newsletter.vue';
import { carCourses, ratings, instructors, testimonialsInfo, latestNews } from '../data';
export default {
    name: 'AppMain',
    data() {
        return { carCourses, ratings, instructors, testimonialsInfo, latestNews }
    },
    components: { ColoredButton, LessonForm, WhiteCard, TransparentCard, Carousel, Newsletter }
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
                        <white-card class="shadowed">
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
                <div class="row justify-content-between h-100 pt-2">
                    <div class="col-4 text-center course">
                        <white-card class="shadowed" :isNew="true" newLabel="./src/assets/img/courses/new-corner.jpg">
                            <h2 class="mb-5">Courses</h2>
                            <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices
                                auctor sapien id
                                cursus. Aliquam maximus turpis in vehicula semper.</p>
                            <colored-button label="course information" class="green-button"></colored-button>

                        </white-card>
                    </div>
                    <div class="col-8">
                        <div class="row row-cols-3 h-100">
                            <div v-for="carCourse in carCourses" :key="carCourse.course" class="col">
                                <transparent-card>
                                    <img class="img-fluid" :src="carCourse.src" :alt="carCourse.coursecourse">
                                    <h4 class="my-4">{{ carCourse.course }}</h4>
                                    <colored-button label="learn more" class="grey-button"></colored-button>
                                </transparent-card>
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
            <div class="container h-100">
                <div class="row row-cols-3 h-100">
                    <div v-for="rating in ratings" :key="rating.type"
                        class="col d-flex justify-content-center align-items-start text-center">
                        <white-card class="bordered">
                            <div class="percentage d-flex align-items-center justify-content-center m-4">
                                <h2>{{ rating.rate }}</h2>
                            </div>
                            <div class="mt-5 rate-type">{{ rating.type }}</div>
                        </white-card>
                    </div>
                </div>
            </div>
        </section>
        <!-- instructors -->
        <section id="instructors">
            <div class="container">
                <div class="row instructors-title">
                    <div class="col-8">
                        <h2 class="my-5">Your Instructors</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor
                            sapien id
                            cursus. Aliquam maximus turpis in vehicula semper.</p>
                    </div>
                    <div class="col-4 align-self-center">
                        <colored-button label="more about us" class="green-button w-100 text-center"></colored-button>
                    </div>
                </div>
                <div class="row row-cols-3 instructors-cards">
                    <div v-for="instructor in instructors" :key="instructor.name"
                        class="col d-flex justify-content-center align-items-start text-center">
                        <white-card class="bordered" :class="{ 'highlighted': instructor.highlighted }">
                            <img :title="'Instructor ' + instructor.name" class="img-fluid" :src="instructor.src"
                                :alt="instructor.name">
                            <h3 class="my-4">{{ instructor.name }}</h3>
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <p :class="{ 'mb-5': instructor.highlighted }">{{ instructor.text }}</p>
                        </white-card>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonials -->
        <section id="testimonials" class="text-center">
            <h2>Testimonials</h2>
            <p>Here's what our happy drivers had to say about our services:</p>
            <carousel :options="testimonialsInfo"></carousel>
        </section>
        <!-- latest news -->
        <section id="latest-news">
            <div class="container text-center">
                <div class="latest-news-card">
                    <white-card class="bordered-news" :isLatestNews="true"
                        latest="./src/assets/img/latest/latestnews-bottom-1200x105.png">
                        <h2>Latest News</h2>
                        <div class="row row-cols-2">
                            <div v-for="news in latestNews" :key="news.title" class="col">
                                <transparent-card>
                                    <figure>
                                        <img :src="news.src" :alt="news.title" :title="news.title" class="img-fluid">
                                    </figure>
                                    <h3>{{ news.title }}</h3>
                                    <div>
                                        <span>{{ news.date }}</span>
                                        <span> | </span>
                                        <span class="comments">{{ news.comments }}</span>
                                    </div>
                                    <p>{{ news.text }}</p>
                                </transparent-card>
                            </div>
                        </div>
                        <colored-button label="More from the blog" class="green-button"></colored-button>
                    </white-card>
                </div>
            </div>
        </section>
        <!-- newsletter -->
        <section id="newsletter">
            <newsletter></newsletter>
        </section>
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

main {

    // behind the wheel
    #behind-the-wheel {
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
            color: $orange;
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
            bottom: 60px;
        }

        h2 {
            font-size: 3rem;
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

    // rating
    #rating {
        margin-bottom: 100px;

        .percentage,
        .rate-type {
            color: $lightgrey;
        }

        .percentage {
            min-height: 230px;
            min-width: 230px;
            border-radius: 50%;
            border: 8px solid $orange;

            h2 {
                font-size: 4rem;

            }
        }

        .rate-type {
            font-weight: bold;
        }
    }

    // instructors
    #instructors {
        position: relative;

        .instructors-title {

            h2 {
                font-size: 3rem;
            }

            p {
                color: $lightgrey;
                font-size: 1.3rem;
                padding-right: 150px;
            }
        }

        .instructors-cards {
            position: relative;
            top: 100px;

            a,
            p {
                color: $lightgrey;
            }

            a:hover {
                color: lightblue;
            }

            p {
                font-size: 1.1rem;
            }
        }

    }

    // testimonials
    #testimonials {
        background-image: url(../assets/img/testimonials/testimonial-background.jpg);
        @include bg-image;
        padding: 150px 0;

        h2 {
            font-size: 3rem;
        }

        h2,
        h3 {
            color: $darkgrey;
        }

        p,
        i {
            color: $lightgrey;
        }

        p {
            font-size: 1.2rem;

        }
    }

    // latest news

    #latest-news {
        background-image: url(../assets/img/latest/latestnews-background.jpg);
        @include bg-image;
        position: relative;
        padding-bottom: 150px;

        .latest-news-card {
            position: relative;
            bottom: 50px;

            h2 {
                font-size: 3rem;
                color: $darkgrey;
            }

            h3,
            .comments {
                color: $orange;
            }

            p {
                font-size: 1.1rem;
                color: $lightgrey;
            }
        }
    }

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
}
</style>