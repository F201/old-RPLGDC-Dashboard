<template>
  <v-carousel height="auto" :continuous="false" class="mx-auto">
    <v-carousel-item
      v-for="(member, index) in members.slice(
        0,
        (Math.ceil(this.members.length / 3) * 3) / 3
      )"
      :key="index"
    >
      <div class="carousel__bg pa-6 pb-12 white" height="100%">
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
            <div class="carousel__content--img"></div>
            <div class="carousel__content--name">{{ member.name }}</div>
            <div class="carousel__content--position">
              {{ member.position }}
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
      members: [
        {
          name: "Jonathan",
          position: "Member 1"
        },
        {
          name: "Jonathan",
          position: "Member 2"
        },
        {
          name: "Jonathan",
          position: "Member 3"
        },
        {
          name: "Jonathan",
          position: "Member 4"
        },
        {
          name: "Jonathan",
          position: "Member 5"
        },
        {
          name: "Jonathan",
          position: "Member 6"
        }
      ]
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
  }
};
</script>

<style lang="sass" scoped>
.v-carousel
  border-radius: 40px
  z-index: 1
  max-width: 1095px

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
