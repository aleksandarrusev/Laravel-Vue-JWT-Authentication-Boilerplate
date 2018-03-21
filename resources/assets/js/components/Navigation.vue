<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="navbar-brand">FullSpaApp</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li v-if="isAuthenticated"><router-link :to="{ name: 'timeline' }" class="nav-link">Timeline</router-link> </li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li v-if="isAuthenticated"><a href="" class="nav-link" @click="logout">Logout</a> </li>
                    <li v-if="!isAuthenticated"><router-link :to="{ name: 'login' }" class="nav-link">Login</router-link> </li>
                    <li v-if="!isAuthenticated"><router-link :to="{ name: 'register' }" class="nav-link">Register</router-link> </li>
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href=""
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="" method="POST" style="display: none;">
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        computed: {
            isAuthenticated() {
                return this.$store.state.authenticated
            },
        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
