<template>
  <v-card class="my-8 ma-3 flat text-xs-center" max-width="315">
    <v-img :src="`${productCard.image}`" aspect- height="315"></v-img>
    <v-card-title>
      {{ productCard.name }}
    </v-card-title>
    <v-card-text>
      <v-btn depressed small class="mx-auto white--text">
        {{ productCard.division }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["productCard"],
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.v-card
  font-family: $raleway
  border-radius: 25px

.v-btn
  background: $orange-gradient
  border-radius: 11px

.v-card-title
  font-size: 28px
</style>
