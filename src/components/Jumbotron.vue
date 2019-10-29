<template>
  <v-responsive :class="`jumbotron ${jumbotronImg()}`">
    <TopToolbar />
    <div class="jumbotron__content">
      <div class="jumbotron__content--title">{{ title }}</div>
      <div class="jumbotron__content--desc" v-if="this.$route.path === '/'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </div>
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
  display: flex
  height: 120vh
  background-position: center center
  background-size: cover
  background-repeat: no-repeat
  align-items: center

  &.jumbotron--home
    background-image: url("../assets/jumbotron1.png")

  &.jumbotron--division
    background-image: url("../assets/jumbotron2.png")

  &.jumbotron--product
    background-image: url("../assets/jumbotron3.png")

.jumbotron__content
  display: flex
  align-items: center
  flex-direction: column
  text-align: center
  color: white
  margin-top: -5.5cm

  .jumbotron__content--title
    font-family: $raleway
    font-size: 75px

  .jumbotron__content--desc
    font-family: $roboto
    font-size: 20px
    width: 339px
</style>

<style scoped>
@media only screen and (min-width: 768px) {
  .jumbotron__content .jumbotron__content--title {
    font-size: 120px;
  }

  .jumbotron__content .jumbotron__content--desc {
    width: 439px;
  }
}
</style>
