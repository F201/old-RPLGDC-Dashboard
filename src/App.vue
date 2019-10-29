<template>
  <v-app>
    <Jumbotron
      :title="this.$route.path === '/' ? 'RPL - GDC' : this.$route.name"
    />
    <transition>
      <router-view />
    </transition>
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
