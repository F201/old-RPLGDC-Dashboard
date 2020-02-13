<template>
  <v-carousel
    height="auto"
    :continuous="false"
    class="mx-auto"
    hide-delimiters
    v-if="members != null"
  >
    <v-carousel-item
      v-for="(chunk, index) in chunks"
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
            v-for="(member, idx_member) in chunk"
            :key="idx_member"
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
  computed: {
    chunks() {
      return this.chunk32(this.members, 3);
    }
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
  beforeCreate() {
    fetch("https://rplgdc-dashboard.herokuapp.com/organizations")
      .then(res => res.json())
      .then(data => {
        this.members = data.data;
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
