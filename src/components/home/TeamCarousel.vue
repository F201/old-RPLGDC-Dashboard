<template>
  <div v-if="members != null && members.length != 0" class="team__wrapper">
    <TextPlaceholder
      :header="sectionTeam.header"
      :content="sectionTeam.content"
    />
    <v-carousel
      height="auto"
      :continuous="false"
      class="mx-auto"
      hide-delimiters
    >
      <v-carousel-item v-for="(chunk, index) in chunks" :key="index">
        <div class="carousel__bg pa-6 pb-12 white">
          <v-row
            class="fill-height d-flex justify-space-around flex-column flex-sm-row"
            align="center"
            justify="center"
          >
            <div
              class="carousel__content d-flex flex-column justify-center align-center text-center mt-6 mb-4 mx-4"
              v-for="(member, idx_member) in chunk"
              :key="idx_member"
            >
              <v-img
                class="carousel__content--img"
                :src="member.foto_org_structures"
                eager
                contain
              ></v-img>
              <div class="carousel__content--name">
                {{ member.nama_org_structures }}
              </div>
              <div class="carousel__content--position">
                {{ member.posisi_org_structures }}
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
  name: "TeamCarousel",
  components: {
    TextPlaceholder
  },
  data() {
    return {
      members: null,
      sectionTeam: {
        header: "OUR TEAM",
        content:
          "There are 9 Lab Assistants in total and a head of laboratory that keeps RPLGDC Lab always active"
      }
    };
  },
  computed: {
    chunks() {
      return this.chunk32(this.members, 3);
    }
  },
  methods: {
    // endIndex(index) {
    //   let i = index * 2;
    //   if (index === 0) {
    //     i = 3;
    //   }
    //   return i;
    // },
    // startIndex(index) {
    //   return index * 3;
    // },
    buttonColor() {
      let buttons = document.querySelectorAll(".v-window__container .v-btn");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.backgroundColor = "#F0793C";
        buttons[j].onclick = () => {
          this.buttonColor();
        };
      }
    },
    chunk32(_items) {
      let i;
      const l = Math.ceil(_items.length / 3);
      const items = _items.slice();
      const result = [];
      for (i = 1; i <= l; i++) {
        const chunk3 = items.splice(0, 3);
        result.push(chunk3);
      }
      return result;
    }
  },
  beforeUpdate() {
    this.$nextTick(() => {
      this.buttonColor();
    });
  },
  beforeCreate() {
    fetch(process.env.VUE_APP_URL + "organizations")
      .then(res => res.json())
      .then(data => {
        this.members = data.data;
      });
  }
};
</script>

<style lang="sass" scoped>
.team__wrapper
  margin-bottom: 0
  @media only screen and (max-width: 360px)
    margin-bottom: 500px

.v-carousel
  border-radius: 40px
  z-index: 1
  max-width: 1095px
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)

  .carousel__bg
    color: black
    .carousel__content--img
      width: 202px
      height: 202px
      background: $orange-gradient
      border-radius: 100%
      @media only screen and (min-width: 1025px)
        width: 232px
        height: 232px

    .carousel__content--name
      font-family: $raleway
      font-size: 18px

    .carousel__content--position
      font-family: $roboto
      font-size: 14px
</style>
