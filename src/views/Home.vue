<template>
  <div>
    <div v-if="screen_register != null">
      <EventInfo :event_detail="event_info" @picked_ticket="handle_pick_ticket" />
      <RegistrationPage
        id="register_form"
        :event_detail="event_info"
        v-if="picked_ticket != null"
        :ticket_price="picked_ticket"
      />
    </div>
    <div v-else>
      <LocalStorageData />
      <Home />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Home from "@/components/Home";
import EventInfo from "@/components/EventInfo";
import RegistrationPage from "@/components/RegistrationPage.vue";
import LocalStorageData from "@/components/RetrieveLocalStorage";

export default {
  name: "home",
  components: {
    RegistrationPage,
    EventInfo,
    Home,
    LocalStorageData
  },
  data: function() {
    return {
      event_info: null,
      screen_register: null,
      picked_ticket: null
    };
  },
  methods: {
    picked_the_ticket: function(ticket_code) {
      console.log(ticket_code);
    },
    handle_pick_ticket: function(ticket) {
      this.picked_ticket = ticket;
      this.$nextTick(() => {
        this.$vuetify.goTo('#register_form',0, 500)
      });
    }
  },
  mounted: function() {
    let event_code = this.$route.params.event_code;
    if (typeof event_code !== "undefined") {
      if (event_code != "view-qrcode") {
        Axios.get(
          `${process.env.VUE_APP_ATTENDANCE_URL}/event/info/${event_code}`
        ).then(response => {
          this.event_info = response.data;
          this.screen_register = true;
        });
      } else {
        this.$router.push({
          name: "home"
        });
      }
    }
  }
};
</script>
