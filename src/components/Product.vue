<template>
    <div @mouseover="isHover = true" @mouseleave="isHover = false" id="product">
        <div class="headerContainer">
            <div class="imgContainer" @click="goToProductPage">
                <img :src="book.Image" class="productImage">
            </div>
            <div class="buttonsContainer">
                <v-btn v-show="isHover" @click.native="goToEditProductPage('edit')" icon="icon"
                       class="editButton buttonStyle">
                    <v-icon>mode_edit</v-icon>
                </v-btn>
                <v-btn v-show="isHover" @click.native="removeProduct" icon="icon" class="removeButton buttonStyle">
                    <v-icon>delete_forever</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="infoContainer" @click="goToProductPage">
            <p>Name: {{book.Name}}</p>
            <p>Author: {{book.Author}}</p>
            <p>Published: {{book.Published}}</p>
            <p>Price: {{book.Price}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isHover: false
            }
        },
        methods: {
            goToProductPage() {
                const bookId = this.book.id;
                this.$router.push('/product-page/' + bookId);
            },
            goToEditProductPage(type) {
                const bookId = this.book.id;
                this.$router.push('/product/' + type + '/' + bookId);
            },
            removeProduct() {
                const bookId = this.book.id;
                this.$store.dispatch('removeBook', bookId)
            }
        },
        props: ['book']
    }
</script>

<style scoped>
    #product {
        display: flex;
        height: auto;
        flex: 1 0 25%;
        box-sizing: border-box;
        max-width: calc(25% - 20px);
        margin: 10px;
        flex-direction: column;
        cursor: pointer;
    }

    #product:hover {
        transform: scale(1.05);
    }

    .buttonsContainer {
        display: flex;
        flex-direction: column;
        min-width: 38px;

    }

    .buttonStyle {
        margin: 0;
    }

    .headerContainer {
        display: flex;
        flex-direction: initial;
        justify-content: center;
    }

    .imgContainer {
        max-height: 200px;
    }

    .productImage {
        width: auto;
        height: 200px;
        max-height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .infoContainer {
        width: calc(100% - 35px);
        max-height: 200px;
    }

    .infoContainer > p {
        margin: 0;
        color: #191919;
    }
</style>