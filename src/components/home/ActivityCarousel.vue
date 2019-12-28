<template>
  <v-carousel class="mx-auto" :continuous="false" hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <div class="overlay-content__container d-flex flex-wrap">
        <div class="px-2">
          <v-img
            src="../../assets/mobile.png"
            width="50px"
            height="50px"
          ></v-img>
        </div>
        <div class="px-2">
          <v-img src="../../assets/web.png" width="50px" height="50px"></v-img>
        </div>
        <div class="px-2">
          <v-img src="../../assets/game.png" width="50px" height="50px"></v-img>
        </div>
        <div class="px-2">
          <v-img src="../../assets/uiux.png" width="50px" height="50px"></v-img>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
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

  .overlay-content__container
    position: absolute
    top: 15px
    left: 15px
</style>
