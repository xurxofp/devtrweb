<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar
        collapse-on-scroll
        fixed
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>

        <v-avatar tile>
          <img :src="require('./assets/dtr.svg')" alt="John" />
        </v-avatar>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <apps />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import apps from "./components/apps";

export default {
  name: "App",

  components: {
    apps
  },

  data: () => ({
    //
  })
};
</script>

<style>
header:not(.v-app-bar--is-scrolled) div .v-avatar {
  transform: scale(3);
  top: 35px;
  left: 60px;
}
</style>