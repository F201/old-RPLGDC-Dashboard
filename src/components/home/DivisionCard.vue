<template>
  <div v-if="divisions != null && divisions.length != 0">
    <TextPlaceholder
      :header="sectionDivision.header"
      :content="sectionDivision.content"
    />
    <v-card
      max-width="1096px"
      elevation="5"
      class="pa-10 text-center white mx-auto"
      tile
    >
      <div class="icon-wrapper d-flex justify-space-around flex-wrap">
        <div
          class="icon-container mx-4 d-flex flex-column justify-center align-center"
          v-for="(division, index) in divisions"
          :key="index"
        >
          <v-img
            :src="division.gambar_divisi"
            width="160px"
            height="160px"
            eager
            contain
          ></v-img>
          <v-card-title class="justify-center text-uppercase">{{
            division.nama_divisi
          }}</v-card-title>
        </div>
      </div>
      <v-card-actions>
        <v-btn depressed class="mx-auto mt-6 white--text" to="/division"
          >SEE DETAIL</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import TextPlaceholder from "@/components/home/TextPlaceholder";

export default {
  name: "divisioncard",
  components: {
    TextPlaceholder
  },
  data() {
    return {
      divisions: null,
      sectionDivision: {
        header: "OUR DIVISION",
        content:
          "We have 5 divisions in our laboratorium, these are Mobile Developing, Game Developer, UI/UX Designer, and Web Developer (Front-End & Back-End)"
      }
      // [
      //   {
      //     icon: require("@/assets/mobile.png"),
      //     name: "MOBILE"
      //   },
      //   {
      //     icon: require("@/assets/web.png"),
      //     name: "FRONT-END"
      //   },
      //   {
      //     icon: require("@/assets/web.png"),
      //     name: "BACK-END"
      //   },
      //   {
      //     icon: require("@/assets/game.png"),
      //     name: "GAME"
      //   },
      //   {
      //     icon: require("@/assets/uiux.png"),
      //     name: "UI/UX"
      //   }
      // ]
    };
  },
  beforeCreate() {
    fetch(process.env.VUE_APP_URL + "divisions")
      .then(res => res.json())
      .then(data => {
        this.divisions = data.data;
      });
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
