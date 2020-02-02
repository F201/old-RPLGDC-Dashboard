<template>
  <!-- <v-overlay :value="overlay" class="px-12"> -->
  <v-overlay :value="overlay">
    <div class="overlay-content d-md-flex justify-md-center align-md-center">
      <v-card light max-width="974px">
        <v-btn icon @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="justify-center pb-8 pt-md-8 pt-12"
          >MOBILE DIVISION ACTIVITY</v-card-title
        >
        <div class="content-wrapper mx-sm-12">
          <div
            class="content-container d-flex flex-md-nowrap flex-wrap justify-center"
          >
            <v-img
              src="../../assets/division/activity/activity.png"
              max-width="350px"
              max-height="199px"
              contain
            ></v-img>
            <div class="content-text mx-4 mt-3 mt-sm-0">
              <p class="content-text__title">STUDY GROUP</p>
              <p class="content-text__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                cum unde ipsum, accusamus culpa provident blanditiis ullam
                voluptate molestias nisi nesciunt perspiciatis harum
                praesentium! Modi at ex accusantium atque numquam.
              </p>
            </div>
          </div>
          <div
            class="content-container d-flex mt-4 flex-md-nowrap flex-wrap justify-center"
          >
            <v-img
              src="../../assets/division/activity/activity.png"
              max-width="350px"
              max-height="199px"
              class="order-md-last"
            ></v-img>
            <div class="content-text mx-4 mt-3 mt-sm-0">
              <p class="content-text__title">BRAINSPARK</p>
              <p class="content-text__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                cum unde ipsum, accusamus culpa provident blanditiis ullam
                voluptate molestias nisi nesciunt perspiciatis harum
                praesentium! Modi at ex accusantium atque numquam.
              </p>
            </div>
          </div>
        </div>
        <v-card-title class="justify-center pt-8 pb-6"
          >TOOL AND FRAMEWORK</v-card-title
        >
        <div
          class="content-wrapper mx-sm-12 mx-3 pb-8 d-flex justify-space-around flex-wrap"
        >
          <div class="content-container d-flex flex-column align-center">
            <v-img
              src="../../assets/division/activity/icon/React.png"
              max-width="84.5px"
              max-height="84.5px"
              contain
            ></v-img>
            <div class="tool-text">React Native</div>
          </div>
          <div class="content-container d-flex flex-column align-center">
            <v-img
              src="../../assets/division/activity/icon/React.png"
              max-width="84.5px"
              max-height="84.5px"
              contain
            ></v-img>
            <div class="tool-text">React Native</div>
          </div>
          <div class="content-container d-flex flex-column align-center">
            <v-img
              src="../../assets/division/activity/icon/React.png"
              max-width="84.5px"
              max-height="84.5px"
              contain
            ></v-img>
            <div class="tool-text">React Native</div>
          </div>
          <div class="content-container d-flex flex-column align-center">
            <v-img
              src="../../assets/division/activity/icon/React.png"
              max-width="84.5px"
              max-height="84.5px"
              contain
            ></v-img>
            <div class="tool-text">React Native</div>
          </div>
          <div class="content-container d-flex flex-column align-center">
            <v-img
              src="../../assets/division/activity/icon/React.png"
              max-width="84.5px"
              max-height="84.5px"
              contain
            ></v-img>
            <div class="tool-text">React Native</div>
          </div>
          <div class="content-container d-flex flex-column align-center">
            <v-img
              src="../../assets/division/activity/icon/React.png"
              max-width="84.5px"
              max-height="84.5px"
              contain
            ></v-img>
            <div class="tool-text">React Native</div>
          </div>
        </div>
      </v-card>
    </div>
  </v-overlay>
</template>

<style lang="sass" scoped>
.v-btn
  position: absolute
  right: 10px
  top: 10px
  background-color: $orange-color
  width: 32px
  height: 32px
  .v-icon
    color: white
    font-size: 32px

.overlay-content
  width: 100%
  height: 100vh

.v-card
  overflow-y: auto
  max-height: 837px
  @media only screen and (max-width: 768px)
    height: 100vh
  .v-card__title
    font-size: 36px
    font-family: $raleway
    word-break: break-word
    text-align: center

.content-wrapper
  .content-container
    margin: 0 10px
    .content-text
      .content-text__title
        font-family: $raleway
        font-size: 22px
        color: $orange-color
        word-break: break-all

  .tool-text
    font-family: $raleway
    font-size: 15px
</style>

<script>
export default {
  name: "DivisionOverlay",
  data() {
    return {
      overlay: false
    };
  },
  mounted: function() {
    this.$root.$on("toggle", bool => {
      this.overlay = bool;
    });
  }
};
</script>
