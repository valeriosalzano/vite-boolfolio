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
    getProjects(page) {
      let paramsObject = { ...this.store.axiosGetObject };
      paramsObject.url = '/api/projects';
      paramsObject.params = {
        page,
      }
      // console.log(paramsObject);
      axios(paramsObject)
        .then(response => {
          // console.log(response);
          this.store.data.projects = response.data.results.data;
          this.store.data.pages.current = response.data.results.current_page;
          this.store.data.pages.last = response.data.results.last_page;
        })
    }
  },
  mounted() {
    this.getProjects(1);
  },
}

</script>

<template>
  <body>
    <AppHeader></AppHeader>
    <AppMain 
    :projects="store.data.projects"
    @clickOnPage="getProjects"
    ></AppMain>
  </body>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
