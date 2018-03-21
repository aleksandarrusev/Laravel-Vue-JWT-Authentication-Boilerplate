<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <!--<form>-->

                    <div class="form-group row">
                        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                        <!--<p v-if="errors.name"> SOMETHING WRONG</p>-->
                        <div class="col-md-6">
                            <input id="name" type="text" class="form-control" :class="{'is-invalid': errors.name}"
                                   v-model="name" name="name" autofocus>

                            <span class="invalid-feedback" v-if="errors.name">
                                <strong>{{ errors.name[0] }}</strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                        <div class="col-md-6">
                            <input id="email" type="email" class="form-control" :class="{'is-invalid': errors.email}" name="email" v-model="email">

                            <span class="invalid-feedback" v-if="errors.email">
                                <strong>{{ errors.email[0] }}</strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control" :class="{'is-invalid': errors.password}" name="password"
                                   v-model="password">

                            <span class="invalid-feedback" v-if="errors.password">
                                <strong>{{ errors.password[0] }}</strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-primary" @click.prevent="submit">
                                Register
                            </button>
                        </div>
                    </div>
                    <!--</form>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                name: null,
                email: null,
                password: null,
                errors: [],
            }
        },
        computed: {
           allFieldsFilled: function() {
               // return this.name !== null && this.email !== null && this.password !== null
            }
        },
        methods: {
            ...mapActions([
                'register'
            ]),

            submit: function () {
                this.register({
                    payload: {
                        'name': this.name,
                        'email': this.email,
                        'password': this.password
                    },
                    context: this
                }).then(() => {
                    this.$router.replace({ name: 'timeline' })
                })
            },
        },
    }
</script>

<style scoped>

</style>