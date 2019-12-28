<template>
  <v-carousel height="auto" :continuous="false" class="mx-auto" hide-delimiters>
    <v-carousel-item v-for="(achievement, index) in achievements" :key="index">
      <div class="carousel__bg pa-6 pt-0 pb-12 pt-sm-6 white" height="100%">
        <v-row class="fill-height d-flex flex-wrap" justify="center">
          <v-img
            :src="`${achievement.img}`"
            :eager="true"
            max-width="537px"
            class="align-self-start"
            contain
          ></v-img>
          <div class="carousel__content--container mb-4 ml-sm-6">
            <div class="carousel__content">
              <div class="carousel__content--name text-uppercase">
                {{ achievement.name }}
              </div>
              <div class="carousel__content--year">{{ achievement.year }}</div>
              <div class="carousel__content--product mt-8 d-flex align-center">
                <v-icon size="24px" color="white" class="mr-2 pa-2">
                  mdi-package-variant
                </v-icon>
                <div class="product__title">Produk atau judul pemenang</div>
              </div>
              <div class="carousel__content--team d-flex mt-3">
                <v-icon
                  size="24px"
                  color="white"
                  class="mr-2 mt-3 pa-2 align-self-start"
                  light
                  >mdi-account-group</v-icon
                >
                <v-list light>
                  <v-list-item
                    v-for="(team, index) in achievement.teams"
                    :key="index"
                    class="pa-0"
                    two-line
                  >
                    <span
                      class="display-1 align-self-start mt-1 mr-2"
                      color="#F0793C"
                      >&bull;</span
                    >
                    <v-list-item-content>
                      <v-list-item-title>{{ team.name }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ team.major }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </div>
        </v-row>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          name: "juara 1 lorem ipsum",
          year: "2020",
          product: "Produk atau judul pemenang",
          img: require("@/assets/achievement/foto.png"),
          teams: [
            { name: "Anggota tim pemenang", major: "jurusan" },
            { name: "Anggota tim pemenang", major: "jurusan" },
            { name: "Anggota tim pemenang", major: "jurusan" }
          ]
        },
        {
          name: "juara 1 lorem ipsum",
          year: "2020",
          product: "Produk atau judul pemenang",
          img: require("@/assets/achievement/foto.png"),
          teams: [
            { name: "Anggota tim pemenang", major: "jurusan" },
            { name: "Anggota tim pemenang", major: "jurusan" },
            { name: "Anggota tim pemenang", major: "jurusan" }
          ]
        },
        {
          name: "juara 1 lorem ipsum",
          year: "2020",
          product: "Produk atau judul pemenang",
          img: require("@/assets/achievement/foto.png"),
          teams: [
            { name: "Anggota tim pemenang", major: "jurusan" },
            { name: "Anggota tim pemenang", major: "jurusan" },
            { name: "Anggota tim pemenang", major: "jurusan" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.v-carousel
  border-radius: 40px
  max-width: 1095px
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)

  .carousel__bg
    .v-icon
      background-color: $orange-color
      border-radius: 100px

    .v-responsive.v-image
      box-shadow: none

    .carousel__content--name
      font-family: $raleway
      font-size: 22px

    .carousel__content--year
      font-family: $roboto
      font-size: 20px

    .product__title
      font-family: $raleway
      font-size: 20px

    .carousel__content--team
      .v-list
        .v-list-item
          .v-list-item__title
            font-family: $raleway
            font-size: 20px

          .v-list-item__subtitle
            font-family: $roboto
            font-size: 18px

          span
            color: $orange-color
</style>
