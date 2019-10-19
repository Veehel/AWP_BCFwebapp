<template>
  <v-app>
    <v-app-bar app>
      <head></head>
      <v-toolbar-title class="headline" dark collapse="true">
        <span>BCF ~ Your tastiest memes</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn>Sign In - Sign Up</v-btn>
      </v-toolbar-items
      <v-toolbar-title class="headline text-uppercase">
        <span>BCF</span>
        <span class="font-weight-light"> ~ Your tastiest memes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        target="./components/Login"
      >
        <span class="mr-2">sign in</span>
      </v-btn>

>>>>>>> e421d0222e46b9371dc4230f7609485d94a964f2
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  })
}
</script>
