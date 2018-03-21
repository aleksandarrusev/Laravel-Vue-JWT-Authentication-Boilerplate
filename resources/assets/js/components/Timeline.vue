<template>
    <div>
    <p>Welcome to the timeline</p>
    <p>
        <button class="btn btn-primary" @click="check">Check</button>
    </p>
        <p v-if="name"> {{ name}}</p>
        <p v-if="email"> {{ email}}</p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: null,
                email: null,
            }
        },
        name: "timeline",
        methods: {
            check() {
                axios.get('/api/user').then((response) => {
                    this.name = response.data.name;
                    this.email = response.data.email;
                })
            }
        }
    }
</script>

<style scoped>

</style>