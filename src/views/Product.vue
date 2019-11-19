<template>
  <div class="product">
    <v-container class="px-sm-6 mt-12">
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="productCard in productList"
          :key="productCard.id"
        >
          <ProductCards :productCard="productCard" />
        </v-flex>
        <v-btn depressed class="mx-auto white--text">
          SEE MORE
        </v-btn>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import ProductCards from "@/components/ProductCard";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ProductCards,
    Footer
  },
  data() {
    return {
      productList: [
        {
          id: 1,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 2,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 3,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 4,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 5,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 6,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 7,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 8,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        },
        {
          id: 9,
          name: "KATSIR",
          image: require("@/assets/product/product_mobile.png"),
          division: "MOBILE"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.v-btn
  background: $orange-gradient
  font-family: $raleway
</style>
