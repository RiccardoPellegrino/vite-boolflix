<template>
    <!-- <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ item.original_title }}</h5>
            <p class="card-text">{{ item.title }}</p>
            <p>{{ item.vote_average }}</p>
            <p>{{ item.original_language }}</p>
        </div>
    </div> -->
</template>

<script>

export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.20);
}

.card {
    color: black;
}
</style>