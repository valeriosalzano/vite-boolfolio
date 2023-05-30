<template>
    <div class="app-main container py-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="project in projects" class="col" :key="project.id">
                <OneCard :cardData="project"></OneCard>
            </div>
        </div>
        <div class="container d-flex justify-content-center mt-3">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" :class="{ 'disabled': store.data.pages.current == 1 }"
                            aria-label="Previous" @click="$emit('clickOnPage', store.data.pages.current - 1)">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li v-for="(page, index) in store.data.pages.last" class="page-item">
                        <button class="page-link" :class="{ 'active': store.data.pages.current == (index + 1) }"
                            @click="$emit('clickOnPage', index + 1)">{{ index + 1 }}</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" :class="{ 'disabled': store.data.pages.current == store.data.pages.last }"
                            aria-label="Next" @click="$emit('clickOnPage', store.data.pages.current + 1)">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import OneCard from './OneCard.vue';
import { store } from '../store/store';

export default {
    name: "AppMain",
    components: {
        OneCard,
    },
    data() {
        return {
            store
        }
    },
    props: {
        projects: Array,
    }
}
</script>

<style scoped lang="scss"></style>