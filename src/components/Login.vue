<template>
  <v-container>
    <v-layout text-center wrap>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="5">
              <v-text-field v-model="pseudo" label="pseudo" required></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
          <v-text-field type="password" v-model="password" label="password" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="12" md="8">
          <v-btn v-on:click="login"> Log in </v-btn>
          <v-btn v-on:click="signup"> Sign up </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data: () => ({
    pseudo: '',
    password: ''
  }),
  methods: {
    async login () {
      const jsondata = await this.axios.post('http://localhost:4000/api/login', {
        username: this.pseudo,
        password: this.password
      })
      console.log(jsondata.data)
      this.pseudo = ''
      this.password = ''
    },
    async signup () {
      const jsondata = await this.axios.post('http://localhost:4000/api/signup', {
        username: this.pseudo,
        password: this.password
      })
      console.log(jsondata.data)
      this.pseudo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
