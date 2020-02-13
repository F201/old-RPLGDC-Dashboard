<template>
  <div v-if="items != null">
    <TextPlaceholder
      :header="sectionActivity.header"
      :content="sectionActivity.content"
    />
    <v-carousel class="mx-auto" :continuous="false" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.gambar_activities"
        :alt="item.nama_activities"
      >
        <div class="overlay-content__container d-flex flex-wrap">
          <div
            class="px-2"
            v-for="(division, index) in item.divisions"
            :key="index"
          >
            <v-img
              :src="division.gambar_divisi"
              width="50px"
              height="50px"
              eager
            ></v-img>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item class="end-slide__wrapper">
        <div class="end-slide__container d-flex justify-center align-center">
          <div
            class="end-slide__items d-flex flex-column justify-center align-center"
          >
            <span class="mb-3">WANT TO SEE MORE ?</span>
            <v-btn
              href="https://instagram.com/rplgdc_"
              class="white mt-3"
              text
              depressed
            >
              SEE US ON INSTAGRAM
            </v-btn>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import TextPlaceholder from "@/components/home/TextPlaceholder";

export default {
  name: "ActivitiyCarousel",
  components: {
    TextPlaceholder
  },
  data() {
    return {
      items: null,
      sectionActivity: {
        header: "OUR LATEST ACTIVITY",
        content:
          "Here are the latest activitiy news happening around our Laboratorium"
      }
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
    fetch(process.env.VUE_APP_URL + "detail_activities")
      .then(res => res.json())
      .then(data => {
        this.items = data.activities;
        if (this.items.length > 5) {
          this.items = this.items.slice(
            this.items.length - 5,
            this.items.length
          );
        }
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

  .end-slide__container
    height: 100%

    .end-slide__items
      background: $orange-gradient
      width: 75%
      min-height: 400px
      max-height: 500px

      span
        font-family: $raleway
        font-size: 36px
        color: white
        @media only screen and (max-width: 500px)
          font-size: 20px

      .v-btn
        color: $orange-color
</style>
