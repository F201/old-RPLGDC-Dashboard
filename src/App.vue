<template>
  <v-app>
    <Jumbotron
      :title="this.$route.path === '/' ? 'RPL - GDC' : this.$route.name"
      v-if="this.$route.name != 'productDetails'"
    />
    <router-view />
  </v-app>
</template>

<script>
import Jumbotron from "./components/Jumbotron";

export default {
  name: "App",
  components: {
    Jumbotron
  }
};
</script>

<style lang="sass">
@import "@/sass/variables.sass"
</style>
