<template>
    <form class="d-flex justify-content-center align-items-center" @submit.prevent="doSearch">
        <div>
            <label class="visually-hidden" for="">Search Title</label>
            <input type="text" class="me-1" id="" placeholder="Search Title" v-model.trim="text">
        </div>
        <div>
            <button type="submit" class="btn btn-danger me-3">Search</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchComponent',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        doSearch() {
            console.log(this.text)
        }
    }
}
</script>

<style lang="sass" scoped>

</style>