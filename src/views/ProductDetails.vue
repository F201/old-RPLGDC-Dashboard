<template>
  <div class="product-details white">
    <div class="product-details--header">
      <TopToolbar />
    </div>
    <v-container class="px-sm-6">
      <v-row class="px-sm-6">
        <v-col class="px-sm-6">
          <div class="content_wrapper d-flex flex-lg-nowrap flex-wrap">
            <v-carousel
              height="auto"
              hide-delimiters
              v-if="contents != null && contents.length != 0"
              v-model="index"
            >
              <v-carousel-item
                v-for="(content, index) in contents"
                :key="index"
              >
                <div color="white">
                  <v-row align="center" justify="center">
                    <v-img
                      :src="content.gambar_products"
                      max-width="338px"
                      max-height="338px"
                      height="338px"
                      contain
                      eager
                    ></v-img>
                  </v-row>
                </div>
              </v-carousel-item>
            </v-carousel>
            <div id="product_details">
              <div
                class="product__details--title text-uppercase font-weight-bold mb-4"
              >
                {{ title }}
              </div>
              <v-btn class="mb-5 product__details--category" depressed>
                {{ category }}
              </v-btn>
              <div class="product__details--sub font-weight-bold">
                Deskripsi
              </div>
              <p class="mb-5 product__details--desc">{{ desc }}</p>
              <template v-if="tools != null && tools.length != 0">
                <div class="product__details--sub font-weight-bold">
                  Tool & Framework
                </div>
                <div
                  class="product__details--tools justify-center justify-sm-start d-flex flex-wrap align-center"
                >
                  <div
                    class="mx-3 mt-3"
                    v-for="(tool, index) in tools"
                    :key="index"
                  >
                    <v-img
                      :src="tool.gambar_tools"
                      max-width="84.5px"
                      min-width="84.5px"
                      max-height="84.5px"
                      height="84.5px"
                      contain
                    ></v-img>
                    <div class="tool-text text-center">
                      {{ tool.nama_tools }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import TopToolbar from "@/components/TopToolbar";
import Footer from "@/components/Footer";

export default {
  name: "topToolbar",
  components: {
    TopToolbar,
    Footer
  },
  data() {
    return {
      contents: null,
      title: null,
      desc: null,
      category: null,
      tools: null,
      index: 0
      // [
      //   {
      //     title: "Katsir 1",
      //     category: "Mobile",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
      //     img: require("@/assets/product/product_mobile.png")
      //   },
      //   {
      //     title: "Katsir 2",
      //     category: "PC",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
      //     img: require("@/assets/product/product_mobile.png")
      //   },this.contents[index].kategori_products
      //   {
      //     title: "Katsir 3",
      //     category: "Mobile",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
      //     img: require("@/assets/product/product_mobile.png")
      //   },
      //   {
      //     title: "Katsir 4",
      //     category: "PC",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
      //     img: require("@/assets/product/product_mobile.png")
      //   },
      //   {
      //     title: "Katsir 5",
      //     category: "Mobile",
      //     desc:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,",
      //     img: require("@/assets/product/product_mobile.png")
      //   }
      // ]
    };
  },
  methods: {
    button() {
      let buttons = document.querySelectorAll(".v-window__container .v-btn");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.backgroundColor = "#F0793C";
        buttons[j].onclick = () => {
          // console.log((this.index += 1));
          // this.button(
          //   this.index < this.contents.length - 1
          //     ? (this.index += 1)
          //     : (this.index = 0)
          // );
          this.changeContent(this.index);
        };
      }
    },
    changeContent(index) {
      this.title = this.contents[index].nama_products;
      this.category = this.contents[index].kategori_products;
      this.desc = this.contents[index].deskripsi;
      this.tools = this.contents[index].tools;
    }
  },
  beforeUpdate() {
    this.$nextTick(() => {
      this.button(0);
    });
  },
  beforeCreate() {
    fetch(process.env.VUE_APP_URL + "detail_products")
      .then(res => res.json())
      .then(data => {
        this.contents = data.product;
        this.title = this.contents[0].nama_products;
        this.desc = this.contents[0].deskripsi;
        this.category = this.contents[0].kategori_products;
        // this.img = this.contents[0].gambar_products;
        this.tools = this.contents[0].tools;
      });
  }
};
</script>

<style lang="sass" scoped>
.product-details--header
  background: linear-gradient(12.7deg, #EF9422 1.32%, #F15C59 104.19%), #C4C4C4
  padding: 30px
  @media only screen and (min-width: 600px)
    padding: 50px

.content_wrapper
  margin-top: 4cm

  #product_details, .v-carousel
    width: 100%

  .v-carousel
    padding: 10px 0
    @media only screen and (min-width: 769px)
      width: 50%
      padding: 7px 10px
    @media only screen and (min-width: 1920px)
      width: 35%

  #product_details
    padding: 0 7px
    @media only screen and (min-width: 769px)
      width: 50%
      padding: 0 20px
    @media only screen and (min-width: 1920px)
      width: 65%

    .product__details--title
      font-family: $raleway
      font-size: 36px
      word-break: break-word

    .v-btn
      background-color: $orange-color
      color: white
      font-family: $raleway
      border-radius: 11px

    .product__details--sub
      font-family: $roboto
      font-size: 20px

    p
      font-family: $roboto
      font-size: 20px

    .tool-text
      word-break: break-word
</style>
