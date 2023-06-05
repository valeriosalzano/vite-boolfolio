<template>
    <div>
        <h1 class="display-1 text-center my-5">
            Get in touch
        </h1>
        <ContactForm></ContactForm>
    </div>
</template>

<script>
    import ContactForm from '../components/ContactForm.vue';

    export default {
    name: 'AppContact',
    components: {
        ContactForm,
    }
    }
</script>

<style scoped lang="scss">
    
</style>
