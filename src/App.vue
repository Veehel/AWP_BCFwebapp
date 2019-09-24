<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BCF</span>
        <span class="font-weight-light"> ~ Your tastiest memes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        target="_blank"
      >
        <span class="mr-2">sign in</span>
      </v-btn>
      <v-btn
        text
        target="_blank"
      >
        <span class="mr-2">sign up</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Bcf/>
    </v-content>
  </v-app>
</template>

<script>
import Bcf from './components/Bcf.vue'

export default {
  name: 'App',
  components: {
    Bcf
  },
  data: () => ({
    //
  })
}
</script>
