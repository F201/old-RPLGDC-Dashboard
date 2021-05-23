<template>
  <div>
    <div class="game-header">
      <TopToolbar />
    </div>
    <div class="game-wrapper">
      <template v-if="mobile">
        <div
          class="game-container d-flex justify-center align-center white--text"
        >
          <span class="px-3">
            Please use a desktop to play the game
          </span>
        </div>
      </template>
      <template v-else>
        <div class="game-container d-flex justify-center align-center">
          <iframe :src="link" width="1048px" height="620px"></iframe>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import TopToolbar from "@/components/TopToolbar";

export default {
  name: "topToolbar",
  components: {
    TopToolbar
  },
  data() {
    return {
      link: process.env.VUE_APP_GAME,
      mobile: false
    };
  },
  created() {
    this.mobile =
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1;
  }
};
</script>

<style lang="sass" scoped>
.game-header
    background: linear-gradient(12.7deg, #EF9422 1.32%, #F15C59 104.19%), #C4C4C4
    padding: 30px
    @media only screen and (min-width: 600px)
      padding: 50px

.game-wrapper
  background: url("../../src/assets/recruitment/Recruitment1.jpg") no-repeat
  background-position: center center
  background-size: 100% 100%
  height: 100vh

  .game-container
    background-color: rgba(0, 0, 0, 0.6)
    height: inherit
    word-break: break-word
    font-weight: bold
    font-size: 1.7rem
    text-align: center

    iframe
      outline: none
      border: none
</style>
