<template>
    <header class="d-flex justify-content-between align-items-center mb-5">
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
    height: 80px;
    border-bottom: 2px solid rgb(220, 53, 69);
}
</style>