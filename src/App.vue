<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <img src='https://ticketapps.onewoorks-solutions.com/images/common/ticketapps.png' class='img-fluid' style="height:100%;" />
      <div class="d-flex" style="font-weight:bold; margin-left:10px" @click="go_to_home"> TICKETAPPS</div>
    </v-app-bar>

    <v-content style="height:800px; background-color:#ffffff">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import RegistrationPage from "./components/RegistrationPage";

export default {
  name: "App",

  components: {
    RegistrationPage
  },
  methods: {
    go_to_home: function(){
      window.location.href = '/'
    }
  },
  mounted: function() {
    window.addEventListener("load", function() {
      setTimeout(function() {
        // This hides the address bar:
        window.scrollTo(0, 1);
      }, 0);
    });

    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      // When ready, auto-scroll 1px to hide URL bar
      window.addEventListener("load", function() {
        // Set a timeout...
        setTimeout(function() {
          // Hide the address bar!
          window.scrollTo(0, 1);
        }, 0);
      });
    }
  },

  data: () => ({
    //
  })
};
</script>
