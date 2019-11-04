<template>
  <v-responsive :class="`jumbotron d-flex align-center ${jumbotronImg()}`">
    <TopToolbar />
    <div class="jumbotron__content d-flex align-center flex-column">
      <div class="jumbotron__content--title text-uppercase">{{ title }}</div>
      <div
        class="jumbotron__content--desc mt-n5"
        v-if="this.$route.path === '/'"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </div>
      <v-btn
        class="jumbotron__content--button mt-4 white"
        v-if="this.$route.path === '/'"
        text
      >
        <a class="jumbotron__content--button-learn">LEARN MORE</a>
      </v-btn>
    </div>
  </v-responsive>
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
    jumbotronImg() {
      let jumbotronClass = "";
      if (this.$route.path === "/") {
        jumbotronClass = "jumbotron--home";
      } else if (this.$route.path === "/division") {
        jumbotronClass = "jumbotron--division";
      } else {
        jumbotronClass = "jumbotron--product";
      }
      return jumbotronClass;
    }
  }
};
</script>

<style lang="sass" scoped>
.jumbotron
  height: 125vh
  background-position: bottom center
  background-size: cover
  background-repeat: no-repeat

  &.jumbotron--home
    background-image: url("../assets/home/jumbotron.png")

  &.jumbotron--division
    background-image: url("../assets/division/jumbotron.png")

  &.jumbotron--product
    background-image: url("../assets/product/jumbotron.png")

.jumbotron__content
  text-align: center
  color: white
  margin-top: -5cm

  .jumbotron__content--title
    font-family: $raleway
    font-size: 75px
    @media only screen and (min-width: 768px)
      font-size: 120px

  .jumbotron__content--desc
    font-family: $roboto
    font-size: 20px
    width: 339px
    @media only screen and (min-width: 768px)
      width: 439px

  .jumbotron__content--button
    .jumbotron__content--button-learn
      color: $orange-color
      font-family: $raleway
      font-size: 16px
</style>
