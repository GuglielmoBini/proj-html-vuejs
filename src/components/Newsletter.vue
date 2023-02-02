<script>
import ColoredButton from './ColoredButton.vue';
export default {
    name: 'Newsletter',
    components: { ColoredButton }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center ">
            <div class="col-6 text-center">
                <h2 class="mb-4">SIgn up to our newsletter</h2>
                <form>
                    <div class="mb-4">
                        <input type="email" class="form-control">
                    </div>
                    <colored-button :inForm="true" label="Subscribe" class="green-button w-100"></colored-button>
                    <p>(We do not share your data with anybody, and only use it for its intended purpose)</p>
                </form>
            </div>
        </div>
    </div>
</template>
