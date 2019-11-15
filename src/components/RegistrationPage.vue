<template>
  <v-container>
    <div style="height:150px"></div>
    <PersonForm :products="listProducts" @clicked-show-detail="clickedShowDetailModal" />

    <v-btn @click="tambah_person" block x-large color="primary" text>ADD NEW MEMBER</v-btn>
    <v-btn @click="submit_registration" block x-large color="primary" dark max-width="600"> REGISTER</v-btn>
  </v-container>
</template>

<script>
import PersonForm from "@/components/PersonForm";
export default {
  components: {
    PersonForm
  },
  data: function() {
    return {
      total: 0,
      listProducts: [
        {
          id: 1,
          fullname: "test1",
          identification_no: "",
          mobile_no: "",
          email: ""
        }
      ],
      productSelected: {}
    };
  },
  methods: {
    incrementTotal: function() {
      this.total++;
    },
    submit_registration: function() {
      this.$router.push({
        name: 'confirmation',
        params: {
          persons: this.listProducts
        }
        })
    },
    clickedShowDetailModal: function(value) {
      this.productSelected = value;
    },
    tambah_person: function() {
      var empty_person = {
        id: Math.floor(Math.random() * 100000),
        fullname: "test1",
        identification_no: "",
        mobile_no: "",
        email: ""
      };
      this.listProducts.push(empty_person);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>