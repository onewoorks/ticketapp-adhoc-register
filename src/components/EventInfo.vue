<template>
  <div>
    <v-container class="text-center">
      <h2
        v-ripple="{center:true}"
        class="text-center"
      >{{ event_detail.event_info.event_name.toUpperCase()}}</h2>
      <div>{{ event_detail.event_info.date}}</div>
      <div>{{ event_detail.event_info.venue}}</div>

      <div>
        <v-btn
          block
          v-for="(charges, index) in event_detail.charges"
          :key="index"
          style="margin-top:15px"
          outlined
          x-large
          @click="picked_ticket(charges)"
        >
          <div>{{ charges.mode }}</div>
          <div>|</div>
          <div>RM {{ charges.charge }}</div>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["event_detail", "ticket_picked"],
  methods: {
    picked_ticket: function(ticket) {
      this.$emit("picked_ticket", ticket);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>