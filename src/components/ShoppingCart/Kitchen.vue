<template>
  <div class="kitchen">
    <v-subheader class="grey-text mt-5 d-flex justify-center">
      <h1 class="mt-5">Kitchen</h1>
    </v-subheader>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="product in products" :key="product.id">
          <v-card class="text-lg-center ma-3 text-xs-center" max-width="600">
            <v-responsive v-for="(image, index) in product.images" :key="index">
              <v-img :src="image" width="auto"></v-img>
            </v-responsive>
            <v-card-text class="d-flex justify-space-between">
              <div class="subheading">{{ product.name }}</div>
              <div class="grey--text">{{ product.price | currency }}</div>
            </v-card-text>
            <v-card-actions>
              <add-to-card
                :image="getImage(product.images)"
                :p-id="product.id"
                :price="product.price"
                :name="product.name"
              ></add-to-card>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AddToCard from "../Product/AddToCard";
import { db } from "../../firebase";
export default {
  name: "Kitchen",
  components: {
    AddToCard,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    },
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
