<template>
<nav>
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to='/'>
            <v-toolbar-title >{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn text class="hidden-sm-and-down" to= '/About'>About us</v-btn>
            <v-spacer class='hidden-sm-and-down'></v-spacer>
            <v-btn class='hidden-sm-and-down' color="brown ligten-3" to= '/Login'>SIGN IN/SIGN UP</v-btn>
            <v-btn  color="brown darken-1" class='hidden-sm-and-down' @click="logout">Log out</v-btn>
        </v-app-bar>
        <v-navigation-drawer app  v-model="drawer" color="brown darken-2">
          <v-list class="white--text"> Welcome {{User}}
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-content>
                <v-list-item-content-title class="white--text">{{link.text}}</v-list-item-content-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-content-title depressed class="white--text" @click="logout"> Sign out</v-list-item-content-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => ({
    appTitle: 'BCF ~ Your Tastiest Memes',
    drawer: false,
    links: [
      { text: ' Dashboard', route: '/' },
      { text: ' Sign In', route: '/Login' },
      { text: ' About us', route: '/About' }
    ],
    User: sessionStorage.getItem('session_username')
  }),
  methods: {
    logout () {
      this.axios.post('http://localhost:4000/api/logout')
      sessionStorage.clear()
      this.$router.push('/')
      console.log('log out')
    }
  }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.input_group_details::after {
  background-color: rgba(255, 255, 255, 0.32) !important
}
</style>
