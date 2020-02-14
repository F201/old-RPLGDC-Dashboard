<template>
  <div v-if="news != null && news.length != 0">
    <TextPlaceholder
      :header="sectionNews.header"
      :content="sectionNews.content"
    />
    <v-carousel
      height="auto"
      :continuous="false"
      class="mx-auto"
      hide-delimiters
    >
      <v-carousel-item v-for="(item, index) in news" :key="index">
        <div class="pa-6 pt-sm-6 white">
          <v-row class="fill-height d-flex flex-wrap" justify="center">
            <v-img
              :src="item.gambar"
              eager
              max-width="460px"
              class="mr-sm-6"
              contain
            ></v-img>
            <div class="carousel-container d-flex flex-column">
              <div
                class="carousel-container__content--name text-uppercase mt-md-0 mt-sm-3"
              >
                {{ item.judul }}
              </div>
              <p
                class="carousel-container__content--desc text-uppercase text-wrap"
              >
                {{ item.deskripsi }}
              </p>
              <div class="mt-auto">
                <v-btn depressed :href="item.link_url">SEE DETAIL</v-btn>
              </div>
            </div>
          </v-row>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import TextPlaceholder from "@/components/home/TextPlaceholder";

export default {
  name: "NewsCarousel",
  components: {
    TextPlaceholder
  },
  data() {
    return {
      news: null,
      // [
      //   {
      //     title: "pengumuman hasil rekrutasi",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      //     product: "Produk atau judul pemenang",
      //     img: require("@/assets/news/foto.png")
      //   },
      //   {
      //     title: "pengumuman hasil rekrutasi",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      //     product: "Produk atau judul pemenang",
      //     img: require("@/assets/news/foto.png")
      //   }
      // ],
      sectionNews: {
        header: "OUR LATEST NEWS",
        content: ""
      }
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
    fetch(process.env.VUE_APP_URL + "news")
      .then(res => res.json())
      .then(data => {
        this.news = data.data;
      });
  }
};
</script>

<style lang="sass" scoped>
.v-carousel
  border-radius: 40px
  max-width: 1095px
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)

  .carousel-container
    position: relative
    max-width: 460px
    min-height: 100%

    .carousel-container__content--name
      font-family: $raleway
      font-size: 28px
      margin-bottom: 15px

    .v-btn
      font-family: $raleway
      background: $orange-gradient
      font-size: 16px
</style>
