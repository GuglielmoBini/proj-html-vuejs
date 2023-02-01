<script>

export default {
    name: 'AppMain',
}
</script>

<template>
    <main>
        <!-- behind the wheel -->
        <section id="behind-the-wheel">
            <div class="container h-100">
                <div class="row row-cols-2 justify-content-center align-items-center h-100">
                    <div>
                        <h2>Get Behind The Wheel</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id
                            cursus. Aliquam maximus turpis in vehicula semper.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id
                            cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit
                            lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus
                            turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla
                            nibh.</p>
                    </div>
                    <div class="text-center">
                        <h3>First Lesson Free!</h3>
                        <p>When you make a block booking with us your first lesson is included free.</p>
                        <div class="my-5">FORM</div>
                        <a class="green-button" href="#">request a callback</a>
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
                        <span class="mx-3"><i class="fa-solid fa-phone-flip"></i></span>
                        <span>1-800-555-555</span>
                    </div>
                </div>
            </div>
        </section>
        <section id="courses"></section>
        <section id="rating"></section>
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/mixins' as *;
@use '../assets/scss/partials/variables' as *;

main {
    min-height: 600px;

    #behind-the-wheel {
        height: 600px;
    }

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
}
</style>