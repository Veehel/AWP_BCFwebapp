<template>
    <span>
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to='/'>
            <v-toolbar-title >{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn text class="hidden-sm-and-down" to= '/About'>About us</v-btn>
            <v-spacer class='hidden-sm-and-down'></v-spacer>
            <v-btn color="brown ligten-3" to= '/Login'>SIGN IN/SIGN UP</v-btn>
            <v-btn color="brown darken-1" @click="logout ()">Log out</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => ({
    appTitle: 'BCF ~ Your Tastiest Memes',
    drawer: false
  }),
  methods: {
    async logout () {
      this.axios.post('/api/logout')
      console.log('log out')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
