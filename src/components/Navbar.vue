<script>
import { navLinks } from '../data';
export default {
    name: "Navbar",
    data() {
        return { navLinks }
    }
}
</script>

<template>
    <nav>
        <div class="container h-100">
            <div class="d-flex align-items-center justify-content-between h-100">
                <!-- nav img -->
                <figure class="d-flex align-items-center h-100 m-0">
                    <a href="#" class="p-0"><img src="../assets/img/logo/avada-drivers-logo-2x-300x58.png" alt="logo"
                            class="img-fluid"></a>
                </figure>
                <!-- nav links -->
                <ul class="d-flex align-items-center h-100 m-0 p-0">
                    <li v-for="link in navLinks" :key="link.text">
                        <a :href="link.url"
                            :class="{ 'green-button': link.isButton, 'd-flex align-items-center': link.isNew }">
                            <span>{{ link.text }}</span>
                            <span v-if="link.isNew" class="new-label">NEW</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

nav {
    height: 120px;
    background-color: rgba($color: black, $alpha: 0.4);

    .new-label {
        font-size: 0.7rem;
        padding: 3px;
        background-color: $green;
        border-radius: 5px;
        margin-left: 5px;
        color: $white;
    }
}
</style>