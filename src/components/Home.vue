<template>
    <div id="home" class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10">
        <product v-for="book in books" :book="book"></product>
    </div>
</template>

<script>
    import Product from './Product.vue';
    import {mapGetters} from 'vuex';
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                books: 'books'
            })
        },
        components: {
            product: Product
        }
    }
</script>

<style scoped>
    #home {
        min-height: calc(100% - 100px);
        display: flex;
        flex-wrap: wrap;
        align-self: center;
    }
</style>