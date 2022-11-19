<template>
    <div class="contenitore">
        <div class="card mt-5" style="width: 26rem;">
            <img :src="item.backdrop_path ? imgPath + item.backdrop_path : 'public/images/errore.jpg'"
                class="card-img-top" :alt="item.title">
            <div class="card-body ">
                <h5 class="card-title text-white">{{ item.original_title || item.original_name }}</h5>
                <p class="card-text text-white ">{{ item.title || item.name }}</p>

                <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>

                <p class="text-white ">{{ item.vote_average }}</p>
                <div class="flag" v-if="flag.includes(item.original_language)">
                    <img :src="'/images/' + item.original_language + '.png'" :alt="item.original_language + 'Flag'">
                </div>
                <div v-else>{{ item.original_language }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';


export default {
    props: {
        item: Object
    },
    data() {
        return {
            flag: [
                'en', 'it', 'us', 'de', 'ja', 'es', 'ir', 'fr', 'nl', 'xx', 'ml', 'cn', 'ko'
            ],
            imgPath: 'https://image.tmdb.org/t/p/w342'
        }
    },
    computed: {
        star() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.hide {
    display: none;
}

.flag {
    width: 30px;

    img {
        width: 100%;
        box-shadow: 0 0 6px 3px rgba(#000, 0.20);
    }
}

.card {
    background-color: $bg-color;
    color: black;
    margin-left: 50px;

}

.contenitore {
    transition: 1s;
    cursor: pointer;


    &:hover {
        transform: scale(1.2);
    }
}

.card-img-top {
    position: relative;
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-body {
    position: absolute;
    top: 0;
    left: 0;
    // display: none;

    &:hover {
        display: block;
    }
}
</style>