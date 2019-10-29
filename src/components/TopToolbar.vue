<template>
  <v-app-bar
    app
    :flat="true"
    color="rgba(0, 0, 0, 0)"
    :tile="true"
    class="mt-md-4 px-md-12"
    :absolute="true"
  >
    <img src="@/assets/icon.png" alt="icon.png" />
    <v-toolbar-title>
      <span class="mx-2 font-weight-bold white--text">RPL - GDC</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="d-none d-sm-flex">
      <v-btn
        text
        v-for="(route, link) in routeLink"
        :linkName="route"
        :linkPath="route"
        :key="link"
      >
        <router-link :to="`${route.path}`" class="white--text">
          {{ route.name }}
        </router-link>
      </v-btn>
      <v-btn text>
        <a href="https://medium.com/rplgdc-laboratory" class="white--text">
          BLOG
        </a>
      </v-btn>
    </span>
    <v-btn class="join-button" text>
      JOIN US
    </v-btn>

    <span class="d-sm-none d-xs-flex">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" dark>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(route, link) in routeLink"
            :linkName="route"
            :linkPath="route"
            :key="link"
          >
            <v-list-item-title>
              <router-link :to="`${route.path}`" class="black--text">
                {{ route.name }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <a
                href="https://medium.com/rplgdc-laboratory"
                class="black--text"
              >
                BLOG
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopToolbar",
  props: ["linkName", "linkPath"],
  data() {
    return {
      routeLink: []
    };
  },
  created() {
    this.$router.options.routes.forEach(route => {
      this.routeLink.push({
        name: route.name,
        path: route.path
      });
    });
  }
};
</script>

<style lang="sass" scoped>
@import "@/sass/variables"

.v-toolbar
  font-family: $raleway

a
  text-decoration: none

.join-button
  @extend %button-white
</style>
