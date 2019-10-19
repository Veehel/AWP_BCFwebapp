<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline" dark collapse="true">
        <span>BCF ~ Your tastiest memes</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn>Sign In - Sign Up</v-btn>
      </v-toolbar-items>
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
