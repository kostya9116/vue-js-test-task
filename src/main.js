import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import {store} from './store/store';
import Vuetify from 'vuetify';
import ProductPage from './components/ProductPage.vue';
import AddOrEditProduct from './components/AddOrEditProduct.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/product-page/:id',
        component: ProductPage
    },
    {
        path: '/product/:action/:id',
        component: AddOrEditProduct
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
