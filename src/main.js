import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

Vue.component('index', require('./components/index.vue').default);
Vue.component('about', require('./components/about.vue').default);
Vue.component('game', require('./components/game.vue').default);
Vue.component('result', require('./components/result.vue').default);

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')