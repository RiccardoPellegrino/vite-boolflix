<template>
  <header>
    <HeaderComponent />
    <JumboComponent />
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
import JumboComponent from './components/JumboComponent.vue'

export default {
  components: {
    JumboComponent,
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
  computed: {

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
    getMovieTrending() {
      const apiUrl = store.baseURL + store.endPointTreadingMovie;
      const params = store.params;
      const urlNuovo = apiUrl + params.media_type_movie + params.time_window
      axios.get(urlNuovo, { params }).then((res) => {
        console.log(res.data.results);
        store.movie = res.data.results;
      })
    },
    getSeriesTvTrending() {
      const apiUrl = store.baseURL + store.endPointTreadingSeries;
      const params = store.params;
      const urlNuovo = apiUrl + params.media_type + params.time_window
      axios.get(urlNuovo, { params }).then((res) => {
        console.log(res.data.results);
        store.tv = res.data.results;
      })
    }
  },


  created() {
    this.getMovieTrending();
    this.getSeriesTvTrending();
  }
}
</script>

<style lang="scss" scoped>

</style>