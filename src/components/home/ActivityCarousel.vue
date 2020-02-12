<template>
  <v-carousel
    class="mx-auto"
    :continuous="false"
    hide-delimiters
    v-if="items != null"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.gambar_activities"
      :alt="item.nama_activities"
    >
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
      items: null
      // [
      //   {
      //     src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      //   },
      //   {
      //     src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      //   },
      //   {
      //     src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      //   },
      //   {
      //     src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      //   }
      // ]
    };
  },
  methods: {
    buttonColor() {
      let buttons = document.querySelectorAll(".v-window__container .v-btn");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.backgroundColor = "#F0793C";
        buttons[j].onclick = () => {
          this.buttonColor();
        };
      }
    }
  },
  beforeUpdate() {
    this.$nextTick(() => {
      this.buttonColor();
    });
  },
  beforeCreate() {
    fetch("https://rplgdc-dashboard.herokuapp.com/activities")
      .then(res => res.json())
      .then(data => {
        this.items = data.data;
      });
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
