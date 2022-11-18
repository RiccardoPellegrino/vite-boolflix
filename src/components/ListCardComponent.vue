<template>
    <section class="container-fluid">
        <h2 class="mt-4">{{ title }}</h2>
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
        items: Array,
        title: String
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
section {
    overflow: hidden;

    .row {
        flex-wrap: nowrap;
        overflow: auto;
        height: 330px;
    }
}
</style>