<template>
  <v-img
    :src="require(`@/assets/${this.$route.name}/jumbotron.png`)"
    class="jumbotron"
  >
    <TopToolbar />
    <v-img
      :src="require(`@/assets/${this.$route.name}/jumbotron_bottom.png`)"
      class="jumbotron__content d-flex align-center"
    >
      <div
        class="jumbotron__content--wrapper d-flex align-center justify-center flex-column"
      >
        <div class="jumbotron__content--title text-uppercase">{{ title }}</div>
        <div
          class="jumbotron__content--desc mt-n5"
          v-show="this.$route.path === '/'"
        >
          “Have the courage to follow your heart and intuition. They somehow
          know what you truly want to become.” <br />- Steve Jobs
        </div>
        <!-- <v-btn
          class="jumbotron__content--button mt-4 white"
          v-show="this.$route.path === '/'"
          text
        >
          <span class="jumbotron__content--button-text">PLAY OUR GAME</span>
        </v-btn> -->
        <v-btn
          class="jumbotron__content--button mt-12 white"
          v-show="this.$route.path === '/'"
          fab
          depressed
          @click="goTo('top')"
        >
          <v-icon
            class="jumbotron__content--button-arrow display-2"
            :large="true"
            >mdi-chevron-down</v-icon
          >
        </v-btn>
      </div>
    </v-img>
    <div
      class="jumbotron_object planet--home"
      v-show="this.$route.path === '/'"
    ></div>
    <div
      class="jumbotron_object astronaut--home"
      v-show="this.$route.path === '/'"
    ></div>
    <div
      class="jumbotron_object planet_1--division"
      v-show="this.$route.path === '/division'"
    ></div>
    <div
      class="jumbotron_object planet_2--division"
      v-show="this.$route.path === '/division'"
    ></div>
    <div
      class="jumbotron_object planet--product"
      v-show="this.$route.path === '/product'"
    ></div>
    <div
      class="jumbotron_object satellite--product"
      v-show="this.$route.path === '/product'"
    ></div>
    <div
      class="jumbotron_object rocket--product"
      v-show="this.$route.path === '/product'"
    ></div>
  </v-img>
</template>

<script>
import TopToolbar from "./TopToolbar";

export default {
  name: "Jumbotron",
  props: {
    title: String
  },
  components: {
    TopToolbar
  },
  methods: {
    goTo: el => {
      const element = document.getElementsByClassName(el)[0];
      const top = element.offsetTop;
      window.scrollTo({
        top: top - 20,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.jumbotron
  position: relative
  height: 125vh
  overflow: hidden
  background-color: $orange-color

  .jumbotron__content
    text-align: center
    color: white
    height: 125vh

    .jumbotron__content--wrapper
      margin-top: -5cm

      .jumbotron__content--title
        font-family: $raleway
        font-size: 55px
        @media only screen and (min-width: 768px)
          font-size: 120px

      .jumbotron__content--desc
        font-family: $roboto
        font-size: 20px
        width: 339px
        @media only screen and (min-width: 768px)
          width: 439px

      .jumbotron__content--button
        .jumbotron__content--button-text
          color: $orange-color
          font-family: $raleway
          font-size: 16px

        .jumbotron__content--button-arrow
          background: $orange-gradient
          background-clip: text
          color: transparent
          font-family: $raleway

  .planet--home
    background: url("../assets/home/jumbotron_planet.png")
    width: 100%
    height: 152px
    background-position: left
    top: 100px
    left: -65px
    @media only screen and (min-width: 1025px)
      top: 155px
      left: -85px
      height: 202px

  .astronaut--home
    background-image: url("../assets/home/jumbotron_astronaut.png")
    width: 450px
    height: 650px
    background-position: right
    right: -70px
    bottom: -130px
    transform: rotate(-9deg)
    @media only screen and (min-width: 1025px)
      width: 100%
      bottom: -200px
      transform: none

  .planet_1--division
    background-image: url("../assets/division/jumbotron_planet-1.png")
    width: 193px
    height: 193px
    background-position: right
    right: -50px
    top: 100px
    @media only screen and (min-width: 769px)
      width: 243px
      height: 243px
      top: 250px
      right: 90px

  .planet_2--division
    background-image: url("../assets/division/jumbotron_planet-2.png")
    width: 100%
    height: 684px
    background-position: left
    left: 0
    bottom: -330px
    @media only screen and (min-width: 1601px)
      bottom: -165px

  .planet--product
    background-image: url("../assets/product/jumbotron_planet.png")
    width: 338px
    height: 338px
    background-position: right
    right: -150px
    top: 100px
    @media only screen and (min-width: 1025px)
      width: 100%
      height: 438px
      right: -150px
      top: 150px

  .satellite--product
    background-image: url("../assets/product/jumbotron_satellite.png")
    width: 92px
    height: 101px
    background-position: right
    right: 110px
    top: 105px
    @media only screen and (min-width: 1025px)
      width: 100%
      height: 161px
      right: 190px
      top: 150px

  .rocket--product
    background-image: url("../assets/product/jumbotron_rocket.png")
    width: 325px
    height: 368px
    background-position: left center
    bottom: 80px
    left: 20px
    @media only screen and (min-width: 1025px)
      width: 425px
      height: 468px
      bottom: 280px
      left: 90px

  .jumbotron_object
    z-index: -1
    position: absolute
    background-size: contain
    background-repeat: no-repeat
</style>
