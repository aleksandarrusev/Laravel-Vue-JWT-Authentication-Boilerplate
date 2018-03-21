<template>
    <div>
<p>HELLO</p>
    </div>
</template>

<script>
        export default {
            name: "home",
            data() {
                return {
                    options:null
                }
            },
            mounted() {
                console.log(this.$store)
            }
        }
</script>
<style>
</style>