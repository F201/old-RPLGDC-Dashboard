<template>
  <v-carousel
    height="auto"
    :continuous="false"
    class="mx-auto"
    hide-delimiters
    v-if="members != null"
  >
    <v-carousel-item
      v-for="(member, index) in members.slice(
        0,
        (Math.ceil(this.members.length / 3) * 3) / 3
      )"
      :key="index"
    >
      <div class="carousel__bg pa-6 pb-12 white">
        <v-row
          class="fill-height d-flex justify-space-around flex-column flex-sm-row"
          align="center"
          justify="center"
        >
          <div
            class="carousel__content text-center mb-4 mx-sm-6"
            v-for="(member, index) in members.slice(
              startIndex(index),
              endIndex(startIndex(index))
            )"
            :key="index"
          >
            <v-img
              class="carousel__content--img"
              :src="member.foto_org_structures"
              contain
              eager
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
</template>

<script>
export default {
  data() {
    return {
      members: null
    };
  },
  methods: {
    endIndex(index) {
      let i = index * 2;
      if (index === 0) {
        i = 3;
      }
      return i;
    },
    startIndex(index) {
      return index * 3;
    }
  },
  beforeCreate() {
    fetch("https://rplgdc-dashboard.herokuapp.com/organizations")
      .then(res => res.json())
      .then(data => {
        this.members = data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="sass" scoped>
.v-carousel
  border-radius: 40px
  z-index: 1
  max-width: 1095px
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1)

  .carousel__bg
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
