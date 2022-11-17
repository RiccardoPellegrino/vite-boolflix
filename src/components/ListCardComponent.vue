<template>
    <section class="container-fluid">
        <h2>Movies</h2>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in items" :key="item.id">
                <CardComponent :item="item" />
            </div>

        </div>
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
    name: "ListCardComponent",
    props: {
        items: Array
    },
    data() {
        return {

        };
    },
    components: {
        CardComponent
    }
}
</script>

<style lang="scss" scoped>

</style>