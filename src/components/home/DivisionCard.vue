<template>
  <v-card
    max-width="1096px"
    elevation="5"
    class="pa-10 text-center white mx-auto"
    tile
  >
    <div class="icon-wrapper d-flex justify-space-around flex-wrap">
      <div
        class="icon-container mx-4"
        v-for="(division, index) in divisions"
        :key="index"
      >
        <v-img :src="`${division.icon}`" width="160px" height="160px"></v-img>
        <v-card-title class="justify-center text-uppercase">{{
          division.name
        }}</v-card-title>
      </div>
    </div>
    <v-card-actions>
      <v-btn depressed class="mx-auto mt-6 white--text" to="/division"
        >SEE DETAIL</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "divisioncard",
  data() {
    return {
      divisions: [
        {
          icon: require("@/assets/mobile.png"),
          name: "MOBILE"
        },
        {
          icon: require("@/assets/web.png"),
          name: "WEB"
        },
        {
          icon: require("@/assets/game.png"),
          name: "GAME"
        },
        {
          icon: require("@/assets/uiux.png"),
          name: "UI/UX"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.v-card
  font-family: $raleway
  border-radius: 40px

  .v-btn
    background: $orange-gradient
</style>
