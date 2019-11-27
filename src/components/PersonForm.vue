<template>
  <div>
    <v-form>
      <div
        class="person-form column column-block"
        v-for="(product, index) in products"
        :product="product"
        :index="index"
        :key="product.id"
      >
        <v-card class="mx-auto" max-width="600" style="margin-bottom:20px;">
          <v-img
            class="white--text align-end"
            height="120px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>INFORMATION #0{{ index+1 }}</v-card-title>
          </v-img>
          <v-card-text>
            <div>
              <v-row>
                
                <v-col cols="12" md="12">
                  <v-text-field
                    :counter="120"
                    label="Full Name"
                    required
                    v-model="product.fullname"
                    @change="detail_filled"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    :counter="12"
                    label="Identification No"
                    required
                    v-model="product.identification_no"
                    @change="detail_filled"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="product.phone_no"
                    @change="detail_filled"
                    label="Mobile No"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="product.email"
                    @change="detail_filled"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

              </v-row>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="products.length > 1" @click="remove_person(index)" text>
              <v-icon>mdi-delete-outline {{ products }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data: function() {
    return {
      productSelected: {}
    };
  },

  methods: {
    showDetailModal: function(product) {
      this.productSelected = product;
      this.$emit("clicked-show-detail", product);
    },
    detail_filled: function(product) {
      this.$emit("clicked-show-detail", product);
    },
    remove_person: function(product_index) {
      this.products.splice(product_index,1)
    },
  
  }
};
</script>

<style lang="scss" scoped>
</style>