<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            'app-header': Header
        },
        methods: {
            addBook(data){
                this.$store.dispatch('addBook', data)
            }
        },
        mounted() {
            this.axios.get('http://localhost:8080/data/books.json').then((response) => {
                this.addBook(response.data);
            })
        }
    }
</script>

<style>
    body, html {
        height: 100%;
        width: 100%;
        display: flex;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        background-image: url('./components/assets/img/pageBackground.jpg');
        background-size: cover;
        height: fit-content;
    }
</style>
