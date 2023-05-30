<script>

import axios from 'axios';
import { store } from './store/store.js';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getProjects() {
      let paramsObject = { ...this.store.axiosGetObject };
      paramsObject.url = '/projects'
      console.log(paramsObject);
      axios(paramsObject)
        .then(response => {
          console.log(response);
        })
    }
  },
  mounted() {
    this.getProjects();
  },
}

</script>

<template>
  <body>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </body>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
