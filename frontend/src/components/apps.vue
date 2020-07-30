<template>
  <div id="web">
    <section id="hero" style="min-height:100vh">
      <div style="min-height:100%">
        <v-container fill-height fluid>
          <div color="green" :style="'height:'+headerHeight+'; width:100vw'"></div>
          <v-row align="center" justify="center">
            <v-col class="col-12 col-md-4">
              <div class="pl-xs-8 pl-sm-8 pl-md-12 pl-lg-15">
                <p class="blue--text">.devTR</p>
                <h1 style="font-size: 3rem;">{{ $t('lang.hero.title') }}</h1>
                <p>{{ $t('lang.hero.subtitle') }}</p>
                <div class="py-3"></div>
                <div>
                  <v-dialog v-model="dialogApps" max-width="80vw">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn rounded color="#5C9EFF" dark v-bind="attrs" v-on="on">
                        <v-icon dark color="white" style="padding-right:10px">mdi-play</v-icon> 
                        {{ $t('lang.hero.button') }}
                      </v-btn>
                    </template>
                    <v-card>
                      <!-- <v-card-text>
                        <v-container fluild> -->
                          <v-card>
                            <v-toolbar flat color="primary" dark>
                              <v-toolbar-title>{{ $t('lang.miscellaneous.ourApps') }}</v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-toolbar-items>
                                <v-btn icon dark @click="dialogApps = false">
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <!-- <v-btn dark text @click="dialogApps = false">Close</v-btn> -->
                              </v-toolbar-items>
                            </v-toolbar>
                            <v-tabs vertical>
                              <v-tab class="text-left">
                                <v-icon left>mdi-android</v-icon> Android
                              </v-tab>
                              <v-tab class="text-left">
                                <v-icon left>mdi-apple</v-icon> Apple
                              </v-tab>

                              <v-tab-item>
                                <v-card flat>
                                  <v-card-text>
                                    <Waterfall
                                      :options="{columnWidth: '.v-card', gutter:20, horizontalOrder: true, itemSelector:'.v-card', fitWidth: true}"
                                      style="min-width: 300px; margin: 0 auto"
                                    >
                                      <WaterfallItem v-for="app in android" v-bind:key="app.appId">
                                        <v-hover v-slot:default="{ hover }">
                                          <v-card id="app" shaped style="width: 300px">
                                            <v-img
                                              class="white--text align-end"
                                              :src="app.icon"
                                              style="min-height: 300px"
                                            >
                                              <v-expand-transition>
                                                <div
                                                  v-if="hover"
                                                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                                  style="height: 300px;"
                                                >
                                                  <span v-if="app.free">Free</span>
                                                  <span v-else>{{app.currency}}{{app.price}}</span>
                                                </div>
                                              </v-expand-transition>
                                            </v-img>
                                            <v-card-text class="pt-6" style="position: relative;">
                                              <v-btn
                                                absolute
                                                color="orange"
                                                class="white--text"
                                                fab
                                                large
                                                right
                                                top
                                                :href="app.url"
                                              >
                                                <v-icon>mdi-download</v-icon>
                                              </v-btn>
                                            </v-card-text>

                                            <v-card-subtitle class="text-wrap pb-0">{{app.summary}}</v-card-subtitle>

                                            <v-card-actions>
                                              <v-spacer></v-spacer>
                                              <v-rating
                                                v-model="app.score"
                                                readonly
                                                dense
                                                half-increments
                                                color="orange"
                                              ></v-rating>
                                              <span class="caption mr-2">({{ app.scoreText }})</span>
                                            </v-card-actions>
                                          </v-card>
                                        </v-hover>
                                      </WaterfallItem>
                                    </Waterfall>
                                  </v-card-text>
                                </v-card>
                              </v-tab-item>
                              <v-tab-item>
                                <v-card flat>
                                  <v-card-text>
                                    <Waterfall
                                      :options="{columnWidth: '.v-card', gutter:20, horizontalOrder: true, itemSelector:'.v-card', fitWidth: true}"
                                      style="min-width: 300px; margin: 0 auto"
                                    >
                                      <WaterfallItem v-for="app in ios" v-bind:key="app.appId">
                                        <v-hover v-slot:default="{ hover }">
                                          <v-card shaped style="width: 300px">
                                            <v-img
                                              class="white--text align-end"
                                              :src="app.icon"
                                              style="min-height: 300px"
                                            >
                                              <v-expand-transition>
                                                <div
                                                  v-if="hover"
                                                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                                  style="height: 300px;"
                                                >
                                                  <span v-if="app.free">Free</span>
                                                  <span v-else>{{app.currency}}{{app.price}}</span>
                                                </div>
                                              </v-expand-transition>
                                            </v-img>
                                            <v-card-text class="pt-6" style="position: relative;">
                                              <v-btn
                                                absolute
                                                color="orange"
                                                class="white--text"
                                                fab
                                                large
                                                right
                                                top
                                                :href="app.url"
                                              >
                                                <v-icon>mdi-download</v-icon>
                                              </v-btn>
                                            </v-card-text>
                                            <v-card-title>{{app.title}}</v-card-title>

                                            <v-card-subtitle class="pb-0">{{app.description}}</v-card-subtitle>

                                            <v-card-actions>
                                              <v-spacer></v-spacer>
                                              <v-rating
                                                v-model="app.score"
                                                readonly
                                                dense
                                                half-increments
                                                color="orange"
                                              ></v-rating>
                                              <span class="caption mr-2">({{ app.score }})</span>
                                            </v-card-actions>
                                          </v-card>
                                        </v-hover>
                                      </WaterfallItem>
                                    </Waterfall>
                                  </v-card-text>
                                </v-card>
                              </v-tab-item>
                            </v-tabs>
                          </v-card>
                        <!-- </v-container>
                      </v-card-text> -->
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialogApps = false">{{ $t('lang.miscellaneous.close') }}</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </div>
            </v-col>  
            <v-col class="col-12 col-md-8">
              <!-- <h1
                class="text-center"
                style="font-size: 20vw;background: -webkit-linear-gradient(-45deg,#ff0573, #fe7600);background: linear-gradient(-45deg,#ff0573, #fe7600);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}"
              >.devTR</h1> -->
              <div id="app">
                <div id="playButtons">
                  <v-btn v-on:click="play" class="mx-2" fab dark small color="#2AB767">
                    <v-icon dark>mdi-play</v-icon>
                  </v-btn>

                  <v-btn v-on:click="pause" class="mx-2" fab dark small color="#5C9EFF">
                    <v-icon dark>mdi-pause</v-icon>
                  </v-btn>
                </div>
                <lottie :options="defaultOptions" v-on:animCreated="handleAnimation"/>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section id="features" class="grey lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">{{ $t('lang.miscellaneous.featuresTitle') }}</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col v-for="({ icon, title, text }, i) in $t('lang.features')" :key="i" cols="12" md="4">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="#5C9EFF" size="88">
                    <v-icon large v-text="icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>

              <v-card-text class="subtitle-1" v-text="text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>
    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col v-for="({ value, text }) of $t('lang.stats')" :key="text" cols="12" md="3">
              <div class="text-center">
                <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                <div class="title font-weight-regular text-uppercase" v-text="text"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <section id="featured">
      <div class="py-12"></div>
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">{{ $t('lang.miscellaneous.featuredTitle') }}</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
      </v-container>

      <VueSlickCarousel v-bind="carouselSettings">
        <div width="344" v-for="media in featuredon" v-bind:key="media.media">
          <v-card max-width="344" :color="media.primaryColor" dark>
            <v-card-title>
              <v-avatar tile>
                <img :src="getImgUrl(media.logo)" :alt="media.media" />
              </v-avatar>
              <span class="title font-weight-light px-6">{{media.media}}</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">"{{media.text}}"</v-card-text>

            <v-card-actions>
              <a class="white--text" :href="media.authorLink">- {{media.author}}</a>
              <v-spacer></v-spacer>
              <v-btn :href="media.link" :color="media.secondaryColor">{{ $t('lang.miscellaneous.readAll') }}</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </VueSlickCarousel>
      <div class="py-12"></div>
    </section>
   
    <v-footer dark padless>
      <v-card style="background-image: linear-gradient(to right top, rgba(19, 84, 122, 1), rgba(128, 208, 199, 1)); width: 100vw;" flat tile class="lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >
          {{ $t('lang.miscellaneous.footer') }}
          {{ $t('lang.miscellaneous.footer2') }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>DevelopmentTR</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import axios from "axios";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { Waterfall, WaterfallItem } from "vue2-waterfall";

import Lottie from 'vue-lottie';
import animationData from '../assets/hero.json';

export default {
  name: "Apps",
  components: {
    VueSlickCarousel,
    'lottie': Lottie,
    Waterfall,
    WaterfallItem,
  },
  data() {
    return {
      apps: null,
      android: null,
      ios: null,
      icons: null,
      stats: null,
      items: null,
      features: null,
      featuredon: null,
      defaultOptions: {animationData: animationData},
      animationSpeed: 0.1,
      headerHeight: "128px",
      dialogApps: false,
      carouselSettings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "20px",
        variableWidth: true,
        infinite: true,
        autoplay: false,
        waitForAnimate: false,
        touchMove: true,
        accessibility: true,
        swipe: true,	
        swipeToSlide: true,
        speed: 500,
        responsive: [
          {
            "breakpoint": 1024,
            "settings": {
              "variableWidth": false,
            }
          },
        ],
      }
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    }
  },
  created: function() {
    axios.get("https://api.devtr.es/playstore").then(res => {
      this.android = res.data;
    });

    axios.get("https://api.devtr.es/applestore").then(res => {
      this.ios = res.data;
    });

    this.icons = [
    ];
    this.featuredon = [
      {
        logo: "press/xataka.png",
        link:
          "https://www.xatakandroid.com/aplicaciones-android/como-leer-mensajes-borrados-de-whatsapp-con-la-app-whatsremoved",
        media: "Xataka",
        author: "Juan Carlos González",
        authorLink: "https://www.xatakandroid.com/autor/jcgonzalez",
        text:
          "herramientas como WhatsRemoved que nos permiten anticiparnos a las intenciones de eliminarlos y crearnos un registro con cada mensaje borrado",
        primaryColor: "#2E353F",
        secondaryColor: "#6CA30C"
      },
      {
        logo: "press/xdadevelopers.png",
        link: "https://www.xda-developers.com/pass2pay-google-pay-add-tickets/",
        media: "XDA Developers",
        author: "Adam Conway",
        authorLink: "https://www.xda-developers.com/author/adamconway/",
        text:
          "Its premise is simple – to give the user the ability to add any pass or ticket to their Google Pay",
        primaryColor: "#E79C1D",
        secondaryColor: "#278EE7"
      },
      {
        logo: "press/appoftheday.png",
        link:
          "https://appoftheday.downloadastro.com/app/whatsremoved/",
        media: "App of the day",
        author: "-",
        authorLink:
          "https://appoftheday.downloadastro.com/app/whatsremoved/",
        text: "WhatsRemoved+ is an application that allows you to monitor notifications and folders in the pursuit of changes and deleted files so you never miss anything",
        primaryColor: "#B7D65D",
        secondaryColor: "#053482"
      },
      {
        logo: "press/elandroidelibre.png",
        link:
          "https://elandroidelibre.elespanol.com/2018/01/como-leer-mensajes-borrados-whatsapp-whatsremoved.html",
        media: "El androide libre",
        author: "Manuel Fernández",
        authorLink:
          "https://elandroidelibre.elespanol.com/author/manuel-jesus/",
        text:
          "WhatsRemoved es una escueta app cuya única finalidad es capturar los mensajes eliminados y guardarlos",
        primaryColor: "#9A5935",
        secondaryColor: "#89359A"
      },
      {
        logo: "press/androidpolice.png",
        link:
          "https://www.androidpolice.com/2019/10/03/pass2pay-lets-you-use-your-apple-wallet-passes-and-cards-in-google-pay/",
        media: "Android Police",
        author: "Jon Bitner",
        authorLink: "https://www.androidpolice.com/author/jon-bitner/",
        text:
          "The app Pass2Pay solves that problem, allowing users to import pkpass files into Google Pay in a snap",
        primaryColor: "#131313",
        secondaryColor: "#A61A1A"
      },
      {
        logo: "press/androidpit.png",
        link:
          "https://www.androidpit.com/whatsremoved-retrieves-deleted-messages",
        media: "AndroidPIT",
        author: "Eric Ferrari-Herrmann",
        authorLink:
          "https://www.androidpit.com/user/6473453/eric-ferrari-herrmann",
        text: "WhatsRemoved is brilliant, simple and even bold",
        primaryColor: "#AC1629",
        secondaryColor: "#053482"
      },
      {
        logo: "press/los40.png",
        link:
          "http://los40.com.ar/los40/2018/01/09/tecnologia/1515501963_017618.html",
        media: "Los 40",
        author: "Los 40 Argentina",
        authorLink: "http://los40.com.ar/autor/los_40_principales_argentina/a/",
        text:
          "WhatsRemoved, una app que sirve para recuperar todos los archivos que borraron",
        primaryColor: "#FF3D35",
        secondaryColor: "#FF9700"
      },
      {
        logo: "press/smartlife.png",
        link:
          "https://cincodias.elpais.com/cincodias/2018/01/03/lifestyle/1514999428_230790.html",
        media: "Smart life",
        author: "Jorge Sanz Fernández",
        authorLink:
          "https://cincodias.elpais.com/autor/jorge_sanz_fernandez/a/",
        text:
          "notifica cuando uno de estos mensajes se ha borrado, y nos muestra de inmediato el contenido",
        primaryColor: "#8FDAEB",
        secondaryColor: "#24252F"
      },
      {
        logo: "press/androidphoria.png",
        link:
          "https://androidphoria.com/aplicaciones/pass2pay-aplicacion-google-pay",
        media: "ANDROID PHORIA",
        author: "Roger Herrera",
        authorLink: "https://androidphoria.com/author/roger-herrera",
        text: "puedes tener un pase guardado en tu smartphone en segundos",
        primaryColor: "#222123",
        secondaryColor: "#3ABB2C"
      },
      {
        logo: "press/indiatoday.png",
        link:
          "https://www.indiatoday.in/technology/tech-tips/story/want-to-see-deleted-messages-on-whatsapp-there-is-an-unofficial-way-to-do-it-here-is-how-1658783-2020-03-23",
        media: "INDIA TODAY",
        author: "Yasmin Ahmed",
        authorLink: "https://www.indiatoday.in/author/yasmin-ahmed",
        text:
          "A third-party workaround called WhatsRemoved+ can help users retrieve what was deleted",
        primaryColor: "#F7D709",
        secondaryColor: "#CA1D20"
      },
      {
        logo: "press/androidtr.png",
        link:
          "https://androidtr.es/2019/07/29/pass2pay-la-app-para-guardar-todas-tus-entradas-y-pases-en-google-pay-como-si-fuera-un-iphone/",
        media: "AndroidTR",
        author: "Xurxo Freitas Pereira",
        authorLink: "https://androidtr.es/author/androidtr/",
        text:
          "podrás consultar automáticamente todos tus pases y utilizarlos en todos tus dispositivos",
        primaryColor: "#3F7Ef2",
        secondaryColor: "#FE9600"
      }
    ];
  },
  mounted() {
    this.$nextTick(() => {
      this.headerHeight = document.getElementById("header").clientHeight;
    })
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}
h3 {
  margin-bottom: 5%;
}
.v-card#app {
  margin-bottom: 20px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-toolbar.v-toolbar--collapsed {
  border-bottom-right-radius: 24px !important;
}
.slick-slide {
  padding: 25px;
}
.v-card__actions {
  padding: 16px!important;
}
.v-application a {
  text-decoration: none;
}
#playButtons {
  position: relative;
  z-index: 1;
  float: right;
  margin-right: 80px;
  top: 120px;
}
.v-card__text, .v-card__title {
  word-break: normal!important 
}
@media only screen and (max-width: 600px) {
  #playButtons {
    margin-right: 50px;
    top: 60px;
  }
}
@media only screen and (min-width: 2000px) {
  #playButtons {
    margin-right: 160px;
    top: 160px;
  }
}
</style>