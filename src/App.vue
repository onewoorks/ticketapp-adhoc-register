<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <div class="d-flex" style="font-weight:bold" @click="go_to_home">TICKET APPS</div>
    </v-app-bar>

    <v-content style="height:800px;">
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
