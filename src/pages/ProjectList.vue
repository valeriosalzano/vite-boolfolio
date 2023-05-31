<template>
    <div class="app-main container py-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="project in store.data.projects" class="col" :key="project.id">
                <ProjectCard :cardData="project"></ProjectCard>
            </div>
        </div>
        <PageNavbar 
            :pageData="{current: pages.current, last: pages.last}"
            @clickOnPage="getProjects"></PageNavbar>
    </div>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store/store.js';
    import ProjectCard  from '../components/ProjectCard.vue';
    import PageNavbar from '../components/PageNavbar.vue';

    export default {
        name: "ProjectList",
        components: {
            ProjectCard,
            PageNavbar,
        },
        data() {
            return {
                store,
                pages: {
                    last : null,
                    current : null,
                },
            }
        },
        methods: {
        getProjects(page) {
            let paramsObject = { ...this.store.axiosGetObject };
            paramsObject.url = '/api/projects';
            paramsObject.params = {
                page,
            }
            // console.log(paramsObject);
            axios(paramsObject)
            .then(response => {
                this.store.data.projects = response.data.results.data;
                this.pages.current = response.data.results.current_page;
                this.pages.last = response.data.results.last_page;
            })
        }
        },
        mounted() {
            this.getProjects(1);
        },
    }
</script>

<style scoped lang="scss">

</style>