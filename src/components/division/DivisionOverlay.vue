<template>
  <!-- <v-overlay :value="overlay" class="px-12"> -->
  <v-overlay :value="overlay">
    <div class="overlay-content d-md-flex justify-md-center align-md-center">
      <v-card light max-width="974px">
        <v-btn icon @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="justify-center pb-8 mt-md-7 mt-11">
          <span class="text-uppercase">
            {{ divisionName }} DIVISION ACTIVITY
          </span>
        </v-card-title>
        <div class="content-wrapper mx-sm-12">
          <div
            class="content-container--main d-flex flex-md-nowrap flex-wrap justify-center mb-3"
            v-for="(activity, index) in activities"
            :key="index"
          >
            <v-img
              :src="activity.gambar_activities"
              max-width="350px"
              max-height="199px"
              height="199px"
              contain
              eager
            ></v-img>
            <div class="content-text mx-md-4 mx-0 my-3 my-sm-0">
              <p class="content-text__title text-uppercase">
                {{ activity.nama_activities }}
              </p>
              <p class="content-text__desc">
                {{ activity.deskripsi }}
              </p>
            </div>
          </div>
          <!-- <div
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
          </div> -->
        </div>
        <v-card-title class="justify-center pb-6"
          >TOOL AND FRAMEWORK</v-card-title
        >
        <div
          class="content-wrapper mx-sm-12 mx-3 pb-8 d-flex justify-space-around flex-wrap"
        >
          <div
            class="content-container mb-3 mx-3 mx-sm-0 d-flex flex-column align-center"
            v-for="(tool, index) in tools"
            :key="index"
          >
            <v-img
              :src="tool.gambar_tools"
              max-width="84.5px"
              max-height="84.5px"
              height="84.5px"
              contain
              eager
            ></v-img>
            <div class="tool-text">{{ tool.nama_tools }}</div>
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
    @media only screen and (max-width: 768px)
      font-size: 26px

.content-wrapper
  .content-container--main
    margin: 0 10px
    .content-text
      .content-text__title
        font-family: $raleway
        font-size: 22px
        color: $orange-color

      .content-text__title, .content-text__desc
        word-break: break-all

  .tool-text
    font-family: $raleway
    font-size: 15px
    word-break: break-word
    max-width: 100px
    text-align: center
</style>

<style scoped>
.v-responsive.v-image {
  order: 0;
}

@media only screen and (min-width: 768px) {
  .content-container--main:nth-child(even) .v-responsive.v-image {
    order: 1;
  }
}
</style>

<script>
export default {
  name: "DivisionOverlay",
  data() {
    return {
      overlay: false,
      activities: null,
      divisionName: null,
      tools: null
    };
  },
  mounted: function() {
    this.$root.$on("toggle", (bool, name, activities, tools) => {
      this.overlay = bool;
      this.divisionName = name;
      this.activities = activities;
      this.tools = tools;
    });
  }
};
</script>
