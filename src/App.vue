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
      paramsObject.url = '/api/projects'
      console.log(paramsObject);
      axios(paramsObject)
        .then(response => {
          console.log(response);
          this.store.data.projects = response.data.results;
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
    <AppMain :projects="store.data.projects"></AppMain>
  </body>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
