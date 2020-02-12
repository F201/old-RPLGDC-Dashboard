<template>
  <div class="division white">
    <v-container class="px-sm-6 mt-12">
      <v-row class="px-sm-6">
        <v-col class="px-sm-6">
          <v-card
            v-for="(division, index) in divisions"
            :key="index"
            elevation="5"
            class="mt-12 pa-md-12 pa-6 d-flex flex-column align-left justify-md-center mx-auto"
            tile
          >
            <div class="v-card__content--wrapper">
              <v-card-title class="text-uppercase">{{
                division.nama_divisi
              }}</v-card-title>
              <v-card-text>{{ division.deskripsi }}</v-card-text>
              <v-card-actions>
                <v-btn
                  depressed
                  class="white--text"
                  @click="toggleOverlay(division.id_divisi)"
                >
                  SEE DETAIL
                </v-btn>
              </v-card-actions>
            </div>
            <v-img
              :src="`${division.gambar_divisi}`"
              width="333px"
              min-height="333px"
              eager
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <DivisionOverlay />
    </v-container>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.v-card
  position: relative
  overflow: hidden
  border-radius: 40px
  max-width: 1095px
  height: inherit
  @media only screen and (min-width: 768px)
    height: 373px

  .v-card__content--wrapper
    z-index: 1
    margin-bottom: 283px
    @media only screen and (min-width: 768px)
      margin-bottom: 0

    .v-card__title
      font-size: 55px
      font-family: $raleway

    .v-card__text
      font-size: 20px
      font-family: $roboto
      line-height: 0.75cm
      width: 100%
      @media only screen and (min-width: 768px)
        width: 55%

    .v-btn
      background: $orange-gradient
      font-family: $raleway

  .v-image
    position: absolute
    right: -20px
    bottom: -20px
</style>

<script>
import Footer from "@/components/Footer.vue";
import DivisionOverlay from "@/components/division/DivisionOverlay.vue";

export default {
  components: {
    Footer,
    DivisionOverlay
  },
  data() {
    return {
      divisions: null
    };
  },
  methods: {
    toggleOverlay(id) {
      fetch("https://rplgdc-dashboard.herokuapp.com/detail_divisions/" + id)
        .then(res => res.json())
        .then(data => {
          this.$root.$emit(
            "toggle",
            true,
            data.division[0].nama_divisi,
            data.division[0].activities,
            data.division[0].tools
          );
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    fetch("https://rplgdc-dashboard.herokuapp.com/divisions/")
      .then(res => res.json())
      .then(data => {
        this.divisions = data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
