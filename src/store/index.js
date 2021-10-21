import Vuex from 'vuex';
import Vue from 'vue';
import customers from './modules/customers';

// Load Vuex
Vue.use(Vuex);

// Crate store
export default new Vuex.Store({
    modules: {
        customers
    }
});