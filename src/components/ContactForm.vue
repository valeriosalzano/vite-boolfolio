<template>
    <div class="container">
        <div v-if="success" class="alert alert-success" role="alert">
            Success! I'll reply within a couple days. Thank you.
        </div>
        <form @submit.prevent="submitForm()">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" :class="{'is-invalid': errors.email}" id="email" v-model="email" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <div class="invalid-feedback" v-for="error in errors.email">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" :class="{'is-invalid': errors.name}" id="name" v-model="name">
                <div class="invalid-feedback" v-for="error in errors.name">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="message">Leave a message</label>
                <textarea class="form-control" :class="{'is-invalid': errors.message}" placeholder="Leave a comment here" id="message" v-model="message"></textarea>
                <div class="invalid-feedback" v-for="error in errors.message">
                    {{ error }}
                </div>
            </div>
            <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <button type="submit" class="btn btn-primary" :disabled="sending">
                {{ sending ? 'Sending...' : 'Send message' }}
            </button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store/store';

    export default {
        name: 'ContactForm',
        data() {
            return {
                store,
                name: '',
                email: '',
                message: '',
                success: false,
                sending: false,
                errors: {},
            }
        },
        methods: {
            submitForm(){

                this.success = false;
                this.sending = false;
                this.errors = {};

                let axiosObject = {...this.store.axiosPostObject};

                axiosObject.url = '/api/contacts';

                axiosObject.data = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                };

                axios(axiosObject)
                .then(response => {

                    if(response.data.success){
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        this.success = true;
                    }else{
                        this.errors = response.data.errors;
                        // console.log(this.errors);
                    }

                    this.sending = false;

                }).catch(error => {
                    
                    this.sending = false;
                
                })
            }
        }
    }
</script>

<style scoped lang="scss">

</style>