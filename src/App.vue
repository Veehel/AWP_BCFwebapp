<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>bcf</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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
