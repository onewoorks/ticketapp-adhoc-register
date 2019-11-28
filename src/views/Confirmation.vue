<template>
    <div>
        <v-container style="margin-bottom:60px">
        <v-card 
            v-for="person in persons" 
            :key="person.id"
            style="margin-bottom:20px">
            <v-card-title primary-title>
                <div>
                    <div>{{ person.fullname.toUpperCase() }}</div>
                </div>
            </v-card-title>
            <v-card-text>
                <div>Identification no : {{person.identification_no}}</div>    
                <div>Mobile No : {{person.phone_no}}</div>
                <div>Email : {{person.email}}</div>
                <div style="text-align: right; font-weight:bold">RM {{ person.ticket_price.charge.toFixed(2)}}</div>
            </v-card-text>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                Total Charged:
            </v-card-title>
            <v-card-text style='text-align:right'>
                <h1>RM {{ total_charges.toFixed(2) }}</h1>
            </v-card-text>
        </v-card>

        </v-container>
        <v-btn 
            style="margin-top:20px; position:fixed; bottom:0; border-radius:0"
            @click="submit_registration" block x-large color="primary">
            confirm
        </v-btn>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        data: function(){
            return {
                charge_per_ticket : 0,
                persons           : [],
                total_charges     : 0,
                event_detail      : null,
            }
        },
        methods: {
            go_to_qrcode: function(payloads){
                this.$router.push({
                    name: 'qrcode',
                    params: {
                        persons: payloads,
                        events: this.event_detail
                    }
                })
            },
            add_charges: function(){
                this.persons.map((k)=>{
                    this.total_charges += parseFloat(k.ticket_price.charge.toFixed(2))
                })
            },
            submit_registration: function() {
                Axios.post(
                    process.env.VUE_APP_ATTENDANCE_URL + "/register-person/new-data",
                    this.persons
                ).then(response => {
                    this.go_to_qrcode(response);
                });
    },
        },
        mounted: function(){
            this.persons = this.$route.params.persons
            this.event_detail = this.$route.params.events
            this.add_charges()
        }        
    }
</script>

<style lang="scss" scoped>

</style>