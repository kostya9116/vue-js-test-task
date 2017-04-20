<template>
    <div id="addOrEditProduct">
        <h4 v-if="actionType === 'add'">Add New Product</h4>
        <h4 v-if="actionType === 'edit'">Edit The Product</h4>
        <p v-show="errorMessage" class="errorMessageStyle">All fields are required</p>
        <small class="text-muted labelStyle">Name</small>
        <b-form-input v-model="selectedBook.Name"
                      ref="name"
                      type="text"
                      placeholder="Enter book's name">

        </b-form-input>
        <small class="text-muted labelStyle">Author</small>
        <b-form-input v-model="selectedBook.Author"
                      ref="author"
                      type="text"
                      placeholder="Enter book's author name">

        </b-form-input>
        <small class="text-muted labelStyle">ISBN</small>
        <b-form-input v-model="selectedBook.ISBN"
                      ref="isbn"
                      type="text"
                      placeholder="Enter book's ISBN">

        </b-form-input>
        <small class="text-muted labelStyle">Image URL</small>
        <b-form-input v-model="selectedBook.Image"
                      ref="image"
                      type="text"
                      placeholder="Enter book's cover URL">

        </b-form-input>
        <small class="text-muted labelStyle">Price</small>
        <b-form-input v-model="selectedBook.Price"
                      ref="price"
                      type="text"
                      placeholder="Enter book's price">

        </b-form-input>
        <small class="text-muted labelStyle">Published year</small>
        <b-form-input v-model="selectedBook.Published"
                      ref="published"
                      ype="text"
                      placeholder="Enter book's published year">

        </b-form-input>
        <small class="text-muted labelStyle">Description</small>
        <b-form-input textarea
                      v-model="selectedBook.Description"
                      ref="description"
                      :rows='textAreaRows'
                      placeholder="Enter book's description">

        </b-form-input>
        <div>
            <v-btn @click.native="validation"
                   class="buttonStyle">
                Save
            </v-btn>
            <v-btn @click.native="goHomePage" class="buttonStyle">
                Cancel
            </v-btn>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                selectedBook: 'selectedBook'
            })
        },
        data() {
            return {
                actionType: this.$route.params.action,
                textAreaRows: 6,
                errorMessage: false
            }
        },
        methods: {
            selectBookAction(route) {
                let id = route.params.id;
                this.$store.dispatch('selectBook', id);
                return true
            },
            goHomePage() {
                this.$router.push('/');
            },
            validation(){
                let isValid = true;
                const data = [
                    this.$refs.author.value,
                    this.$refs.description.value,
                    this.$refs.isbn.value,
                    this.$refs.image.value,
                    this.$refs.name.value,
                    this.$refs.price.value,
                    this.$refs.published.value,
                ];
                data.map(data => {
                    if(!data){
                        isValid = false;
                        this.errorMessage = true;
                    }
                });
                isValid && this.saveProductData();
            },
            saveProductData() {
                const book = {
                    Author: this.$refs.author.value,
                    Description: this.$refs.description.value,
                    ISBN: this.$refs.isbn.value,
                    Image: this.$refs.image.value,
                    Name: this.$refs.name.value,
                    Price: this.$refs.price.value,
                    Published: this.$refs.published.value,
                    id: this.$refs.isbn.value
                };
                if (this.actionType === 'edit') {
                    this.$store.dispatch('editBook', book);
                } else {
                    this.$store.dispatch('addBook', book);
                }
                this.$router.push('/');
            },
        },
        watch: {
            $route (to, from){
                this.selectBookAction(to);
            }
        },
        created(){
            this.selectBookAction(this.$route);
        }
    }
</script>

<style scoped>
    #addOrEditProduct {
        display: flex;
        flex: 0 0 83.333333%;
        width: 83.33%;
        max-width: 350px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        flex-direction: column;
    }
    .errorMessageStyle{
        margin: 0;
        color: red;
        font-size: 18px;
    }
    .labelStyle {
        margin-top: 10px;
        text-align: left;
        font-size: 18px;
        color: #2c3e50 !important;
        font-weight: bold;
    }

    .buttonStyle {
        background-color: white !important;
        color: #191919 !important;
        font-family: Rubik;
        cursor: pointer;
        margin: 10px 30px;
    }

    .buttonStyle:hover {
        background-color: #F8C38B !important;;
    }

</style>