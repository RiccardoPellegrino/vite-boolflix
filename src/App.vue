<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <ListCardComponent />
  </main>

</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import ListCardComponent from './components/ListCardComponent.vue';

export default {
  components: {
    HeaderComponent,
    ListCardComponent
  },
  data() {
    return {
      store
    };
  },
  watch: {

  },
  methods: {
    getMovie() {
      const apiUrl = store.baseURL + store.endPoint;
      const params = store.params;
      axios.get(apiUrl, { params }).then((res) => {
        console.log(res.data.results);
      })
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>