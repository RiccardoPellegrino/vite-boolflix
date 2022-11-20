<template>
    <div class="contenitore mt-5">
        <div class="card" @mouseover="show = true" @mouseleave="show = false">
            <img :src="item.backdrop_path ? imgPath + item.backdrop_path : 'public/images/errore.jpg'"
                class="card-img-top" :alt="item.title">
            <div class="card-body">
                <h5 class="card-title ">{{ item.original_title || item.original_name }}</h5>
                <div v-show="show">
                    <p class="card-text ">{{ item.title || item.name }}</p>

                    <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>

                    <p>{{ item.vote_average }}</p>
                    <div class="flag" v-if="flag.includes(item.original_language)">
                        <img :src="'/images/' + item.original_language + '.png'" :alt="item.original_language + 'Flag'">
                    </div>
                    <div v-else>{{ item.original_language }}</div>
                    <div>
                        {{ item.overview }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    props: {
        item: Object
    },
    data() {
        return {
            flag: [
                'en', 'it', 'us', 'de', 'ja', 'es', 'ir', 'fr', 'nl', 'xx', 'ml', 'cn', 'ko', 'ar', 'pt', 'br', 'tl', 'sv', 'da', 'sh'
            ],
            imgPath: 'https://image.tmdb.org/t/p/w342',
            show: false
        }
    },
    computed: {
        star() {
            return Math.ceil(this.item.vote_average / 2)
        }
    },

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
    position: relative;
    overflow: hidden;

}

.contenitore {
    transition: 1s;
    cursor: pointer;


    &:hover {
        transform: scale(1.1);
    }
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    color: white;


    &:hover {
        display: block;
        background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(0, 0, 0, 1) 80%);
    }
}
</style>