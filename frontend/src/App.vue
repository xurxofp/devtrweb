<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar
        id="header"
        collapse-on-scroll
        fixed
        color="#fcb69f"
        dark
        shrink-on-scroll
        :style="userStyle"
        :src="require('./assets/dc_tile.svg')" alt="DevelopmentTR"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" style="background-color: white;"></v-img>
        </template>

        <div style="filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));">
        <v-avatar tile style="overflow: visible;">
          <img :src="require('./assets/dtr_white.svg')" alt="DevelopmentTR"/>
        </v-avatar>
        </div>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon style="filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));">mdi-email</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ $t('lang.email.title') }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field :label="$t('lang.email.email')+'*'" required></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea auto-grow :label="$t('lang.email.text')+'*'" required></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <small>*{{ $t('lang.email.required') }}</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">{{ $t('lang.miscellaneous.close') }}</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">{{ $t('lang.miscellaneous.send') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-menu
          transition="slide-y-transition"
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              tile
              icon
              dark
              v-bind="attrs"
              v-on="on"
              style="filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));"
            >
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="language in languages"
              :key="language.title"
              @click="changeLocale(language.language)"
            >
              <flag :iso="language.flag" v-bind:squared=false />
              <v-list-item-title style="margin-left:10px">{{ language.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>


        <!-- <v-btn icon>
          <v-icon style="filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));">mdi-email</v-icon>
        </v-btn> -->

      </v-app-bar>

      <v-content>
        <apps />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import apps from "./components/apps";
import {i18n} from '@/plugins/i18n';

export default {
  name: "App",

  components: {
    apps,
  },

  data: () => ({
    dialog: false,
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'es', language: 'es', title: 'Español' }
      ],
  }),
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  },
  computed: {
    userStyle () {
      return {
        '--bg-image': 'url(' + require('./assets/dc_tile.svg') + ')',
      }
    }
  }
};
</script>

<style>
header:not(.v-app-bar--is-scrolled) div .v-avatar {
  transform: scale(3);
  top: 35px;
  left: 60px;
}
.v-app-bar--is-scrolled .v-toolbar__image .v-image .v-image__image--cover{
  background-image: var(--bg-image), linear-gradient(to right top, rgba(19, 84, 122, 0.5), rgba(128, 208, 199, 0.8))!important;
}
</style>