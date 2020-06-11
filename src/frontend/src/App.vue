<template>
  <v-app id="inspire">

    <v-navigation-drawer
            v-model="drawer"
            app

    >

          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item Login id="img1">
              <v-list-item-action>
                <v-icon>Login</v-icon>
              </v-list-item-action>
              <v-list-item-content >
                <v-list-item-title >Login</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item Join>
              <v-list-item-action>
                <v-icon>Join</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Join</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

        </v-list>
    </v-navigation-drawer>



    <v-app-bar
            app
            color="black"
            dark
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Park. GYM</v-toolbar-title>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

    </v-app-bar>



    <v-content1>
        <template>
            <v-carousel>
                <v-carousel-item
                        v-for="(item,i) in slides"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>

        </template>
      <v-container
              class="fill-height"
              fluid
      >

      </v-container>
    </v-content1>

    <v-content2>
      <div id="app">
        <v-app id="inspire">
          <div>
            <v-card>
              <v-responsive :aspect-ratio="16/9">
                <v-card-text>
                  This card will always be 16:9 (unless you put more stuff in it)
                </v-card-text>
              </v-responsive>
            </v-card>
          </div>
        </v-app>
      </div>
<!--      <template>-->
<!--        <div>-->
<!--          <input id="search"-->
<!--                 v-model="searchWord"-->
<!--                 type="text"-->
<!--                 style=" background-repeat: no-repeat; background-position: 88% 50%, 98% 50%;"-->
<!--                 title="검색">-->
<!--        </div>-->
<!--        <div id="box">-->
<!--          <input  @click="search" id="google_search" type="button" value="Google 검색">-->
<!--        </div>-->
<!--      </template>-->

    </v-content2>

    <template>
      <v-footer
              dark
              padless
      >
        <v-card
                class="flex"
                flat
                tile
        >
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>

            <v-spacer></v-spacer>

            <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    black
                    icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Park GYM.</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({

      drawer: null,
        slides: [
            {
                src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            },
            {
                src : 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
            },
            {
                src: 'https://images.unsplash.com/photo-1580051745101-2dca6e53f15c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            },
            {
                src: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            },
        ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      })
    }


</script>
<style scoped>
  #search {
    color: white;
  }

</style>