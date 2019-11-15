<template>
    <v-container>
        checkout
        {{ persons }}

        <v-btn @click="go_to_qrcode" block x-large color="primary">
            confirm
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        data: function(){
            return {
                persons: []
            }
        },
        methods: {
            go_to_qrcode: function(){
                this.$router.push({
                    name: 'qrcode',
                    params: {
                        persons: this.persons
                    }
                })
            }
        },
        mounted: function(){
            this.persons = this.$route.params.persons
        }        
    }
</script>

<style lang="scss" scoped>

</style>