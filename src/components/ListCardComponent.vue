<template>
    <section class="container-fluid">

        <h2 class="mt-4"><i class="fa-solid fa-chevron-left arrow-left" @click="scrollLeft()"></i>{{ title }}<i
                class="fa-solid fa-chevron-right arrow-right" @click="scrollRight()"></i><a href="#"
                class="ms-5 back-to-top active"><i class="fa-solid fa-arrow-up fs-2"></i></a></h2>

        <div class="row ps-5" ref="cards">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(item, index) in items" :key="item.id">
                <CardComponent :item="item" />
            </div>

        </div>
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store'
export default {
    name: "ListCardComponent",
    props: {
        items: Array,
        title: String
    },
    data() {
        return {
            store,
        };
    },
    components: {
        CardComponent
    },
    methods: {
        scrollLeft() {
            const element = this.$refs.cards;
            console.log(element)
            element.scrollBy({ left: -1000, behavior: "smooth", });
        },
        scrollRight() {
            const element = this.$refs.cards;
            element.scrollBy({ left: 1000, behavior: "smooth", });
        }
    },
    updated() {
        if (store.params.query) {
            this.$refs.cards.scrollIntoView({ behavior: 'smooth' })
        }

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

        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>