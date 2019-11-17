<template>
    <div>
        <v-container v-if="no_data == null" class='justify-center text-center'>
            You need to scan the event QRCode to proceed with Ad Hoc Registration
            
            <div style="margin-top:30px">
<v-btn color="success" @click="go_to_scanner">Scan QR Code</v-btn>
            </div>
            
        </v-container>
        
        
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
                no_data: null
            }
        },
        mounted: function(){
            if (localStorage.getItem('confirmed_qrcode') != null){
                this.no_data = false
            }
        },
        methods: {
            go_to_scanner: function(){
                this.$router.push({
                    name: "qrscanner"
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>