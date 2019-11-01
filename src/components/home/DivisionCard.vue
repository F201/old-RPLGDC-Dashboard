<template>
  <v-card elevation="5" class="pa-10 text-center" tile>
    <div class="icon-wrapper d-flex justify-space-around flex-wrap">
      <div
        class="icon-container mx-3"
        v-for="(division, index) in divisions"
        :key="index"
      >
        <v-img :src="`${division.icon}`" width="160px" height="160px"></v-img>
        <v-card-title class="justify-center text-uppercase">{{
          division.name
        }}</v-card-title>
      </div>
    </div>
    <v-btn depressed class="mx-auto mt-6">SEE DETAIL</v-btn>
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
  background: $white-gradient
  font-family: $raleway
  border-radius: 40px

  .v-btn
    color: white
    background: $orange-color
</style>
