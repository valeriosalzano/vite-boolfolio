<template>
    <div class="container py-3 project-container">

        <h1 class="display-4 border-bottom mb-3 pb-3 text-center">
            {{ project.title }}
        </h1>

        <div class="container-fluid my-3">
            <img :src="getCardImg" class="w-100"/>
        </div>

        <h5 v-if="project.type?.name" class="my-3">
            Type of project: {{ project.type.name }}            
        </h5>

        <h5 v-if="project.technologies != ''">
           Technologies used: 
           <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-secondary p-2 me-2">
                {{ technology.name }}
           </span>
        </h5>
        <p class="lh-lg my-3">
            {{ project.description }}
        </p>

        <div v-if="project.title != lastProject.title" class="container text-center">
            <router-link :to="{name: 'project-single', params: {slug: lastProject.slug}}" class="btn btn-secondary">
                Check out our last project
            </router-link>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store/store.js';
    export default {
        name: 'ProjectSingle',
        data() {
            return {
                store,
                project: {},
                lastProject: {},
            }
        },
        computed: {
            getCardImg() {
                let project = this.project;

                let imgUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.se3DXw-mPQ4LPJvFU33pQgAAAA%26pid%3DApi&f=1&ipt=7d8cb4465c589eff3cc9edf536fc8d09f08e533e5dc744595f6acbe65fc7a9e9&ipo=images';
                if (project.cover_image) {
                    imgUrl = project.cover_image;
                    if (imgUrl.substring(0, 5) == 'cover') {
                        imgUrl = `${this.store.axiosGetObject.baseURL}/storage/${imgUrl}`;
                    }
                }
                return imgUrl
            },
        },
        methods: {
            getProject(slug){
                let paramsObject = { ...this.store.axiosGetObject };
                paramsObject.url = `/api/project/${slug}`;
                // console.log(paramsObject);
                axios(paramsObject)
                    .then(response => {
                        // console.log(response);
                        if(slug == 'last'){
                            this.lastProject = response.data.project;
                        } else {
                            this.project = response.data.project;
                        }
                    })
                    .catch(error => {
                        // console.log(error);
                        this.$router.push({name: 'not-found'})
                    });
            },
        },
        watch: {
            '$route.params.slug'(newSlug, oldSlug){
                this.getProject(newSlug)
            }

        },
        mounted() {
            this.getProject(this.$route.params.slug),
            this.getProject('last')
        }
    }
</script>

<style scoped lang="scss"></style>