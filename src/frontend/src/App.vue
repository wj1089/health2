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

    <v-content>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
            color="black"
            app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),
  }
</script>
<style scoped>

  /*#img1 https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPXhyL-WLAOp7dZu6sBf4cKRL7rUEQHBtAm3Ev6d_XgUwfUhL-&usqp=CAU;}*/


</style>