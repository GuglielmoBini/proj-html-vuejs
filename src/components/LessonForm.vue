<script>
import ColoredButton from './ColoredButton.vue';
export default {
    name: 'LessonForm',
    components: { ColoredButton }
}
</script>

<template>
    <form>
        <div class="mb-4">
            <input type="text" class="form-control" placeholder="Your Name*" required>
        </div>
        <div class="mb-4">
            <input type="email" class="form-control" placeholder="Email*" required>
        </div>
        <div class="mb-4">
            <input type="text" class="form-control" placeholder="Phone">
        </div>
        <div class="mb-5">
            <input type="text" class="form-control" placeholder="Location">
        </div>
        <colored-button :inForm="true" label="request a callback" class="green-button"></colored-button>
    </form>
</template>