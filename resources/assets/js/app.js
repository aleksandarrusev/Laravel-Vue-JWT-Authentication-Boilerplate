require('./bootstrap');
window.Vue = require('vue');


import router from './routes/index';
import store from './vuex/index';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('Navigation', require('./components/Navigation.vue'));
Vue.component('App', require('./components/App.vue'));
// Vue.component('Home', require('./components/Home.vue'));


store.dispatch('setToken').then(() => {
    store.dispatch('fetchUser').catch(() => {
        store.dispatch('clearAuth')
        router.replace({ name: 'login' })
    })
}).catch(() => {
    store.dispatch('clearAuth')
})


const app = new Vue({
    el: '#app',
    router,
    store: store,
});
