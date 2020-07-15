<template>
    <v-container>
        <v-row
            justify="space-around"
        >
            <v-col
                cols=4
                style="min-width: 300px"
            >
                <h1>Hi my name is Dimitry, I'm a Developer 👨🏼‍💻</h1>
            </v-col>        
            <v-col
            >
                <v-container fluid>

                    <v-row
                        justify="start"
                        class="mx-auto"
                    >

                        <v-col
                            cols=11
                        >

                        <v-col
                            cols=auto
                            v-for="app in apps" v-bind:key="app.appId"
                        >
                            <v-card
                                class="mx-auto"
                                shaped
                                style="max-width: 300px;"
                            >
                                <v-img
                                class="white--text align-end"
                                :src=app.icon
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
                                        v-model="app.scoreText"
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
                        </v-col> 
                        </v-col>   
                    </v-row>
                </v-container>
            </v-col> 
        </v-row>
    </v-container>
</template>

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
    import axios from 'axios';

    export default {
        name: 'Apps',
        data() {
            return {
                apps: null,
            };
        },
        created: function() {
        axios
            .get('http://34.241.113.171:3000/playstore')
            .then(res => {
                this.apps = res.data;
            })
        }
    }
</script>

<style>
    h3 {
        margin-bottom: 5%;
    }
    .v-card {
        margin-top: 25px;
    }
</style>