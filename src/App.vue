<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BCF </span>
        <span class="font-weight-light">~ Your tastiest memes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        target="./components/Login"
      >
        <span class="mr-2">sign in</span>
      </v-btn>

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
