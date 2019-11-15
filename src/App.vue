<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <div class="d-flex align-center" style='text-align:center; font-weight:bold'>
          TICKET APPS
      </div>

    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import RegistrationPage from './components/RegistrationPage';

export default {
  name: 'App',

  components: {
    RegistrationPage
  },

  data: () => ({
    //
  }),
};
</script>
