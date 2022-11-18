<template>
    <header class="d-flex justify-content-between align-items-center ">
        <a href="#"><img src="public\images\BOOLFLIX.png" alt=""></a>
        <div class="d-flex text-white">
            <a class="nav-link active fs-5 me-5" aria-current="page" href="#">Home</a>
            <a class="nav-link active fs-5 me-5" aria-current="page" href="#movie">Movie</a>
            <a class="nav-link active fs-5 me-5" aria-current="page" href="#serie">SerieTv</a>
        </div>
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

a:hover {
    color: rgb(220, 53, 69);
}

img {
    width: 150px;
    margin-left: 15px;
}
</style>