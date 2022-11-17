<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <ListCardComponent title="Movies" :items="store.movie" />
    <ListCardComponent title="TV Series" :items="store.tv" />
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
    'store.params.query'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getMovie();
        this.getSeries();
      }
      console.log('new valore ' + newVal)
      console.log('old valore ' + oldVal)

    }
  },
  methods: {
    getMovie() {
      const apiUrl = store.baseURL + store.endPointMovie;
      const params = store.params;
      axios.get(apiUrl, { params }).then((res) => {
        console.log(res.data.results);
        store.movie = res.data.results;
      })
    },
    getSeries() {
      const apiUrl = store.baseURL + store.endPointTv;
      const params = store.params;
      axios.get(apiUrl, { params }).then((res) => {
        console.log(res.data.results);
        store.tv = res.data.results;
      })
    },
    // getMoviePopular() {
    //   const apiUrl = store.baseURL + store.endPointMovie;
    //   const params = store.params;
    //   axios.get(apiUrl, { params }).then((res) => {
    //     console.log(res.data.results);
    //     store.movie = res.data.results;
    //   })
    // },
    // getSeriesTvPopular() {
    //   const apiUrl = store.baseURL + store.endPointTv;
    //   const params = store.params;
    //   axios.get(apiUrl, { params }).then((res) => {
    //     console.log(res.data.results);
    //     store.tv = res.data.results;
    //   })
    // }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>