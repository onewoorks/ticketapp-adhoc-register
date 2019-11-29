<template>
  <div>
    <v-container style="margin-bottom:60px">
      <PersonForm :products="listPersons" :ticket_price="ticket_price" />

      <v-btn @click="tambah_person" block x-large color="primary" text>ADD NEW MEMBER</v-btn>
    </v-container>

    <v-btn
      @click="submit_response"
      block
      x-large
      color="primary"
      dark
      style="position:fixed; bottom:0; margin:0; border-radius:0; left:0"
    >REGISTER</v-btn>
  </div>
</template>

<script>
import PersonForm from "@/components/PersonForm";
export default {
  name: "registerpage",
  props: ["event_detail", "ticket_price"],
  components: {
    PersonForm
  },
  data: function() {
    return {
      total: 0,
      event_id: null,
      listPersons: [
        {
          id: 1,
          fullname: "",
          identification_no: "",
          phone_no: "",
          email: "",
          register_mode: "on_event",
          event_id: this.event_detail.id,
          ticket_price: this.ticket_price
        }
      ],
      productSelected: {},
      ticket_price_picked: 0
    };
  },
  methods: {
    tambah_person: function() {
      var empty_person = {
        id: Math.floor(Math.random() * 100000),
        fullname: "",
        identification_no: "",
        phone_no: "",
        email: "",
        register_mode: "on_event",
        event_id: this.event_detail.id,
        ticket_price: this.ticket_price
      };
      this.listPersons.push(empty_person);
      this.$nextTick(() => {
        this.$vuetify.goTo("#person-" + (this.listPersons.length-1), 0,500);
      });
    },
    required_data: function(payloads){
      let valid = 0
      if (payloads.email == ""){
        valid += 1
      }
      if (payloads.fullname == ""){
        valid += 1
      }
      if (payloads.identification_no == ""){
        valid += 1
      }
      if (payloads.phone_no == ""){
        valid += 1
      }
      return valid
    },
    verify_person: function(){
      let proceed = 0
      this.listPersons.forEach((k,v)=>{
        proceed += this.required_data(k)
      })
      return proceed
    },
    submit_response: function() {
      if (this.verify_person() === 0){
        this.$router.push({
        name: "confirmation",
        params: {
          persons: this.listPersons,
          events: this.event_detail
        }
      });
      } else {
        alert("Please check your registeration fields, make sure all information is completed")
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>