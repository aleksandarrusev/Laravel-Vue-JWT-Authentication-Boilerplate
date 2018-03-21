import Vue from 'vue';
import Vuex from 'vuex';
import {isEmpty} from 'lodash'
// import App from '../App'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        authenticated: false,
    },
    getters: {

    },
    mutations: {

        setToken(state, token) {
            if (isEmpty(token)) {
                localStorage.removeItem('authtoken', token)
                return
            }

            localStorage.setItem('authtoken', token)
        },

        setAuthenticated (state, trueOrFalse)  {
            state.authenticated = trueOrFalse
        },

        setUserData (state, data) {
            state.user.data = data
        }

    },
    actions: {
        register({dispatch},{payload, context}) {
            return axios.post('/api/register', payload).then((response) => {
                dispatch('setToken', response.data.meta.token).then(() => {
                    dispatch('fetchUser')
                })
            }).catch((error) => {
                context.errors = error.response.data.errors
            })

        },
        login({commit, state, dispatch},{payload, context}) {
            return axios.post('/api/login', payload).then((response) => {
                dispatch('setToken', response.data.meta.token).then(() => {
                    dispatch('fetchUser')
                })
            }).catch((error) => {
                context.errors = error.response.data.errors
            })
        },
        logout({dispatch}) {
            dispatch('setToken', null)
        },

        fetchUser ({ commit }) {
            return axios.get('/api/user').then((response) => {
                commit('setAuthenticated', true)
                commit('setUserData', response.data)
            })
        },

        logout ({ dispatch })  {
            return axios.post('/api/logout').then((response) => {
                dispatch('clearAuth')
            })
        },


        setToken  ({ commit, dispatch }, token) {
            if (isEmpty(token)) {
                return dispatch('checkTokenExists').then((token) => {
                    setHttpToken(token)
                })
            }

            commit('setToken', token)
            dispatch('setHttpToken', token);

        },

        checkTokenExists ({ commit, dispatch }, token) {
            return localStorage.getItem('authtoken').then((token) => {
                if (isEmpty(token)) {
                    return Promise.reject('NO_STORAGE_TOKEN');
                }
                return Promise.resolve(token)
            })
        },


        setHttpToken (store ,token) {
            console.log(token);
            if (isEmpty(token)) {
                window.axios.defaults.headers.common['Authorization'] = null
            }

            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        },

        clearAuth ({ commit }, token) {
            commit('setAuthenticated', false)
            commit('setUserData', null)
            commit('setToken', null)
            dispatch('setHttpToken', null);
        }


    },

});

