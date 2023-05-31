<template>
    <div class="container d-flex justify-content-center mt-3 page-navbar">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link" :class="{ 'disabled': pageData.current == 1 }"
                        aria-label="Previous" @click="$emit('clickOnPage', pageData.current - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li v-for="page in pageData.last" class="page-item">
                    <button class="page-link" :class="{ 'active': pageData.current == (page) }"
                        @click="$emit('clickOnPage', page)">{{ page }}</button>
                </li>
                <li class="page-item">
                    <button class="page-link" :class="{ 'disabled': pageData.current == pageData.last }"
                        aria-label="Next" @click="$emit('clickOnPage', pageData.current + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'PageNavbar',
        props: {
            pageData: Object,
        }
    }
</script>
<style lang="">
    
</style>