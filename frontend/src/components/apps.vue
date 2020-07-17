<template>
  <div id="web">
    <section id="hero" style="height:100vh">
      <div style="height:100%">
        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-col>
              <h1
                class="text-center"
                style="font-size: 20vw;background: -webkit-linear-gradient(-45deg,#ff0573, #fe7600);background: linear-gradient(-45deg,#ff0573, #fe7600);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}"
              >.devTR</h1>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section id="features" class="grey lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
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
            <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
              <div class="text-center">
                <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                <div class="title font-weight-regular text-uppercase" v-text="title"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <section id="featured">
      <div class="py-12"></div>
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">Featured on:</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
      </v-container>

      <VueSlickCarousel v-bind="carouselSettings">
        <div v-for="media in featuredon" v-bind:key="media.media">
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
              <v-btn :href="media.link" :color="media.secondaryColor">Read all</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </VueSlickCarousel>
      <div class="py-12"></div>
    </section>
    <!-- <section id="apps">
      <v-container fluild>
        <v-card>
          <v-toolbar flat color="primary" dark>z
            <v-toolbar-title>Apps</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab class="text-left">
              <v-icon left>mdi-andrpod</v-icon>Android
            </v-tab>
            <v-tab class="text-left">
              <v-icon left>mdi-apple</v-icon>iOS
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
      </v-container>
    </section>-->

    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>



<!--<template>

    <v-container fluild>
        <v-row>
            <v-col cols=4 class="mx-auto">
                <h1 style="min-width:300px">Hola que tal fajdfasld asdalj 👨🏼‍💻</h1>
            </v-col>
            <v-col>    
                <Waterfall :options="{columnWidth: '.v-card', gutter:20, horizontalOrder: true, itemSelector:'.v-card', fitWidth: true}" style="min-width: 300px; margin: 0 auto">
                    <WaterfallItem
                    v-for="app in apps" v-bind:key="app.appId"
                    >
                    
                        <v-card
                            shaped
                            style="width: 300px"
                        >
                            <v-img
                            class="white--text align-end"
                            :src=app.icon
                            style="min-height: 300px"
                            >
                            </v-img>
                            <v-card-title>{{app.title}}</v-card-title>
                            

                            <v-card-subtitle class="pb-0">{{app.summary}}</v-card-subtitle>

                            <v-card-actions>
                                <v-btn
                                    color="orange"
                                    text
                                >
                                    Download
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-rating
                                    v-model=app.score
                                    readonly
                                    dense
                                    half-increments
                                    color="orange"
                                ></v-rating>
                                <span class="caption mr-2">
                                    ({{ app.scoreText }})
                                </span>
                            </v-card-actions>
                        </v-card>
                    </WaterfallItem>
                </Waterfall>
            </v-col>
        </v-row>
    </v-container>

</template> -->

<!-- <template>
    <v-container fluid mx-auto>
        <v-row>
            <v-col cols="12">
                <v-row
                    align="stretch"
                    justify="start"
                >
                        <v-card
                            color="#26c6da"
                            dark
                            max-width="400"
                            style="margin-left:25px"
                            v-for="app in apps" v-bind:key="app.appId"
                        >
                            <v-card-title>
                            <v-icon
                                large
                                left
                            >
                                mdi-android
                            </v-icon>
                            <span class="title font-weight-light">Play Store</span>
                            </v-card-title>

                            <v-card-text class="headline font-weight-bold">
                            {{app.summary}}
                            </v-card-text>

                            <v-card-actions>
                            <v-list-item class="grow">
                                <v-list-item-avatar color="grey darken-3">
                                <v-img
                                    class="elevation-6"
                                    :src="app.icon"
                                ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                <v-list-item-title>{{app.title}}</v-list-item-title>
                                </v-list-item-content>

                                <v-row
                                align="center"
                                justify="end"
                                >
                                <v-icon class="mr-1">mdi-star</v-icon>
                                <span class="subheading mr-2">{{app.scoreText}}</span>
                                </v-row>
                            </v-list-item>
                            </v-card-actions>
                        </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template> -->

<!-- <template>
  <div class="container">
    <h3> Apps:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">url</th>
          <th scope="col">icon</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in apps" v-bind:key="app.appId"> 
          <th scope="row">{{app.appId}}</th>
          <td>{{app.title}}</td>
          <td>{{app.url}}</td>
          <td>{{app.icon}}</td>
        </tr>
      </tbody>
    </table> 
  </div> 
</template> -->

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import { Waterfall, WaterfallItem } from "vue2-waterfall";

export default {
  name: "Apps",
  components: {
    VueSlickCarousel
    // Waterfall,
    // WaterfallItem
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
      carouselSettings: {
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        speed: 5000
      }
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  },
  created: function() {
    axios.get("http://34.241.113.171:3000/playstore").then(res => {
      this.android = res.data;
    });

    axios.get("http://34.241.113.171:3000/applestore").then(res => {
      this.ios = res.data;
    });

    this.icons = [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram"
    ];
    this.stats = [
      ["24k", "Github Stars"],
      ["330+", "Releases"],
      ["1m", "Downloads/mo"],
      ["5m", "Total Downloads"]
    ];
    this.items = ["hola", "que", "tal"];
    this.features = [
      {
        icon: "mdi-account-group-outline",
        title: "Vibrant Community",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
      },
      {
        icon: "mdi-update",
        title: "Frequent Updates",
        text:
          "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
      },
      {
        icon: "mdi-shield-outline",
        title: "Long-term Support",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
      }
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
/* .v-card {
  margin-bottom: 20px;
} */
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
</style>