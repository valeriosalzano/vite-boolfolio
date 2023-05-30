<template>
    <div class="app-main container py-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="project in projects" class="col" :key="project.id">
                <OneCard :cardData="project"></OneCard>
            </div>
        </div>
    </div>
</template>

<script>
import OneCard from './OneCard.vue';

export default {
    name: "AppMain",
    components: {
        OneCard,
    },
    props: {
        projects: Array,
    }
}
</script>

<style scoped lang="scss"></style>