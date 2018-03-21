import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/Register';
import Login from '../components/Login.vue'
import Home from '../components/Home'
import Timeline from '../components/Timeline.vue'



Vue.use(Router);


const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                guest: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
        },        {
            path: '/timeline',
            name: 'timeline',
            component: Timeline,
            meta: {
                auth:true
            }
        },

        {
            path: '/',
            name: 'home',
            component: Home
        },
// { path: '/bar', component: Bar }
    ]
});

export default router