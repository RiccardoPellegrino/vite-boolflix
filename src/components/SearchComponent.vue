<template>
    <form class="d-flex justify-content-center align-items-center" @submit.prevent="doSearch">
        <div>
            <label class="visually-hidden" for="">Search Title</label>
            <input type="text" class="me-1 text-white" id="input" placeholder="Search Title" v-model.trim="text">
        </div>
        <div>
            <button type="submit" class="btn me-3"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </form>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SearchComponent',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        doSearch() {
            console.log('do search ' + this.text)
            store.params.query = this.text;
        }
    }
}
</script>

<style lang="scss" scoped>
#input {
    border-color: rgb(220, 56, 69);
    background-color: rgb(53, 53, 53);
    border-radius: 20px;

    &:focus-visible {
        outline: none;
        border-color: red !important;
    }
}

button {
    // background-color: rgb(53, 53, 53);
    color: rgb(220, 56, 69);
}
</style>