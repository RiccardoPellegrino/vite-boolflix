<template>
    <header class="d-flex justify-content-between align-items-center">
        <h1 class="text-danger ms-3">Boolflix</h1>
        <SearchComponent />
    </header>
</template>

<script>
import SearchComponent from './SearchComponent.vue';

export default {
    name: "HeaderComponent",
    data() {
        return {};
    },
    components: {
        SearchComponent
    }
}
</script>

<style lang="scss" scoped>
header {
    border-bottom: 2px solid grey;
}
</style>