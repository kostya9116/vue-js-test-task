<template>
    <div id="header">
        <div class="headerContentContainer col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10">
            <div @click="goHomePage" class="headerLogoContainer">
                <p class="headerLogoFirstHalf">Books</p>
                <p class="headerLogoSecondHalf">Store</p>
            </div>
            <div class="addButtonContainer">
                <v-btn @click.native="goToAddProductPage('add')" class="addNewProductButton">
                    Add New Product
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goHomePage() {
                this.$router.push('/');
            },
            goToAddProductPage(type) {
                this.$router.push('/product/' + type + '/newProduct');
            }
        }
    }
</script>

<style scoped>
    #header {
        height: 130px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: url('./assets/img/headerBackground.jpg');
        background-size: cover;
    }

    .headerContentContainer::before,
    .headerContentContainer::after {
        content: none;
    }

    .headerContentContainer {
        display: flex;
        justify-content: space-between;
    }

    .headerLogoContainer {
        background: transparent !important;
        width: fit-content;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        cursor: pointer;
    }

    .headerLogoFirstHalf {
        color: #FFFFFF;
        width: fit-content;
        margin: 0;
        font-size: 50px;
        line-height: 50px;
        font-weight: bold;
        text-transform: uppercase;
        font-family: Rubik;
    }

    .headerLogoSecondHalf {
        color: #F8C38B;
        width: fit-content;
        margin: 0;
        font-size: 35px;
        line-height: 35px;
        text-transform: uppercase;
        font-family: Rubik;
    }

    .addButtonContainer {
        float: right;
        display: flex;
        max-height: 35px;
        align-self: center;
    }

    .addButtonContainer > .addNewProductButton {
        background-color: white !important;
        color: #191919 !important;
        font-family: Rubik;
        cursor: pointer;
    }

    .addButtonContainer > .addNewProductButton:hover {
        background-color: #F8C38B !important;;
    }
</style>