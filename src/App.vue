<template>
  <NavComponent />
  <MainComponent />
  <CardComponent />
  <CardsComponent />

</template>

<script>
import CardComponent from './components/CardComponent.vue';
import CardsComponent from './components/CardsComponent.vue';
import MainComponent from './components/MainComponent.vue';
import NavComponent from './components/NavComponent.vue';

export default {
  components: {
    NavComponent,
    MainComponent,
    CardComponent,
    CardsComponent
  }
}
</script>

<style lang="scss" scoped>

</style>