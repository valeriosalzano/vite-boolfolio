<!-- SCRIPT -->
<script>
  import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppHeader,
    },
   
  }

</script>

<!-- TEMPLATE -->
<template>
  <body>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </body>
</template>

<!-- STYLE -->
<style lang="scss">
  @use './styles/general.scss';

</style>
