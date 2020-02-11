<template>
  <v-app-bar
    app
    :flat="true"
    color="rgba(0, 0, 0, 0)"
    :tile="true"
    class="mt-sm-4 px-sm-6"
    :absolute="true"
  >
    <img src="@/assets/icon.png" alt="icon.png" />
    <v-toolbar-title>
      <span class="mx-2 font-weight-bold white--text">RPL - GDC</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="d-none d-md-flex">
      <router-link
        v-for="(route, link) in routeLink"
        :linkName="route"
        :linkPath="route"
        :key="link"
        :to="`${route.path}`"
      >
        <v-btn class="white--text" text>
          {{ route.name }}
        </v-btn>
      </router-link>
      <a href="https://medium.com/rplgdc-laboratory">
        <v-btn class="white--text" text>
          BLOG
        </v-btn>
      </a>
    </span>

    <RecruitmentPrompt />

    <span class="d-md-none d-sm-flex">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" dark>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <router-link
            v-for="(route, link) in routeLink"
            :linkName="route"
            :linkPath="route"
            :key="link"
            :to="`${route.path}`"
            class="black--text"
          >
            <v-list-item>
              <v-list-item-title class="text-uppercase">
                {{ route.name }}
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <a href="https://medium.com/rplgdc-laboratory" class="black--text">
            <v-list-item>
              <v-list-item-title>
                BLOG
              </v-list-item-title>
            </v-list-item>
          </a>
        </v-list>
      </v-menu>
    </span>
  </v-app-bar>
</template>

<script>
import RecruitmentPrompt from "@/components/RecruitmentPrompt";

export default {
  name: "TopToolbar",
  props: ["linkName", "linkPath"],
  components: {
    RecruitmentPrompt
  },
  data() {
    return {
      routeLink: [],
      dialog: true,
      check: false
    };
  },
  created() {
    this.$router.options.routes.forEach(route => {
      if (
        route.name == "home" ||
        route.name == "division" ||
        route.name == "product"
      ) {
        this.routeLink.push({
          name: route.name,
          path: route.path
        });
      }
    });
  }
};
</script>

<style lang="sass" scoped>
.v-toolbar
  font-family: $raleway
  @media only screen and (min-width: 1280px)
    margin: auto 3cm

a
  text-decoration: none
</style>
