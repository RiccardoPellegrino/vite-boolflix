<template>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ item.original_title }}</h5>
            <p class="card-text">{{ item.title }}</p>
            <p>{{ item.vote_average }}</p>
            <div class="flag" v-if="flag.includes(item.original_language)">
                <img :src="'/images/' + item.original_language + '.png'" :alt="item.original_language + 'Flag'">
            </div>
            <div v-else>{{ item.original_language }}</div>
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
                'en', 'it', 'us', 'de', 'ja', 'es', 'ir', 'fr'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.flag {
    width: 30px;

    img {
        width: 100%;
        box-shadow: 0 0 6px 3px rgba(#000, 0.20);
    }
}

.card {
    color: black;
}
</style>