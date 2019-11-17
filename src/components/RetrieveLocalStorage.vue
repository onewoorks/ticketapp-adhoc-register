<template>
    <div >
        <v-container>
            <v-card @click="go_to_qrcode()" v-if="qrcodes != null"> 
            <v-card-title primary-title>
                    <div>{{ qrcodes.events.event_info.event_name.toUpperCase()}}</div>
            </v-card-title>
            <v-card-text>
                <div>{{ qrcodes.events.event_info.venue}}</div>
                <div>{{ qrcodes.events.event_info.date}}</div>
                <div>Total Tickets : {{ qrcodes.tickets.length }}</div>
            </v-card-text>
        </v-card>
       
        </v-container>

        <v-btn v-if="qrcodes != null" class="bottom-button" block color="error"
        @click="clear_local_storage">CLEAR</v-btn>
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
                qrcodes: null
            }
        },
        methods: {
            go_to_qrcode: function(){
                this.$router.push({
                    name: 'viewqrcode',
                    params: {
                        persons: this.qrcodes.tickets,
                        events: this.qrcodes.events
                    }
                })
            },
            clear_local_storage: function(){
                localStorage.removeItem('confirmed_qrcode')
                this.qrcodes = null
            }
        },
        mounted: function(){
            let qrcode_confirmed = localStorage.getItem('confirmed_qrcode')
            this.qrcodes = JSON.parse(qrcode_confirmed)
        }
    }
</script>

<style>
    .bottom-button {
        position: fixed;
        left:0;
        bottom:0;
        border-radius: 0
    }
</style>