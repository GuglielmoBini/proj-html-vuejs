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
                <figure class="d-flex align-items-center h-100 m-0">
                    <a href="#" class="p-0"><img src="../assets/img/logo/avada-drivers-logo-2x-300x58.png"
                            alt="logo"></a>
                </figure>
                <ul class="d-flex align-items-center h-100 m-0 p-0">
                    <li v-for="link in navLinks"><a :href="link.url" :class="{ 'green-button': link.isButton }">{{
                        link.text
                    }}</a></li>
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

    a:hover {
        color: $green;
    }
}
</style>