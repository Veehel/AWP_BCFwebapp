<template>
  <v-app>
      <v-spacer></v-spacer>
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
