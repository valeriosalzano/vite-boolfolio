<template>
    <header class="mb-3">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container py-2">
                <span class="navbar-brand fs-2 fw-semibold me-5">
                    <router-link :to="{name: 'home'}" class="nav-link">
                        Boolfolio - Front
                    </router-link>
                </span>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li  v-for="link in menu" class="nav-item me-3">
                        <router-link :to="{name: link.routeName}" class="nav-link">{{link.label}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            menu: [
                {
                    label: 'Repository',
                    routeName: 'projects'
                },
                {
                    label: 'Get in touch',
                    routeName: 'contact'
                },
                {
                    label: 'About us',
                    routeName: 'about'
                },
            ]
        }
    },
}

</script>

<style scoped lang="scss">
</style>