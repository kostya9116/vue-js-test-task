<template>
    <div id="productPage">
        <div class="coverContainer">
            <img :src="book.Image">
        </div>
        <div class="infoContainer">
            <span>
                <span class="infoHeader">Name:</span>
                <span class="infoParagraph">{{book.Name}}</span>
            </span>
            <span>
                <span class="infoHeader">Author:</span>
                <span class="infoParagraph">{{book.Author}}</span>
            </span>
            <span>
                <span class="infoHeader">Description:</span>
                <span class="infoParagraph">{{book.Description}}</span>
            </span>
            <span>
                <span class="infoHeader">ISBN:</span>
                <span class="infoParagraph">{{book.ISBN}}</span>
            </span>
            <span>
                <span class="infoHeader">Price:</span>
                <span class="infoParagraph">{{book.Price}}</span>
            </span>
            <span>
                <span class="infoHeader">Published year:</span>
                <span class="infoParagraph">{{book.Published}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        computed: {
            ...mapGetters({
                book: 'selectedBook'
            })
        },
        watch: {
            '$route' (to, from) {
                console.log(to.params.id);
            }
        },
        mounted(){
            const id = this.$route.params.id;
            this.$store.dispatch('selectBook', id);
        }
    }
</script>

<style scoped>
    #productPage {
        display: flex;
        flex: 0 0 83.333333%;
        max-width: 83.33%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }

    .infoContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
    }

    .infoContainer > span {
        text-align: justify;
    }

    .infoHeader {
        font-weight: bold;
        font-size: 20px;
    }

    .infoParagraph {
        font-size: 15px;
    }

</style>