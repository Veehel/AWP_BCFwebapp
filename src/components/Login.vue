<template>
  <v-form>
           <v-alert
      v-model="show"
      :dismissible=false
      :type="msgType"
    >
      {{statusMsg}}
    </v-alert>
    <v-row>
        <v-col cols="12" sm="6">
    <v-text-field
      v-model="Username"
      label="Username"
      required
      clearable
      outlined
      rounded
      dense
    ></v-text-field>
    <v-text-field
      v-model="Password"
      label="Password"
      type='password'
      required
      clearable
      outlined
      rounded
      dense
    ></v-text-field>
        </v-col>
    </v-row>
    <v-row align="center">
        <v-col cols="20" sm="2">
    <v-btn
      color=success
      v-on:click="Login()"
      block
      rounded
    >
      Log in
    </v-btn>
        <v-btn
      color=error
      block
      rounded
      @click="createNewUser"
    >
      Register
    </v-btn>
        </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    Username: '',
    Password: '',
    show: false,
    msgType: 'error',
    statusMsg: '',
    loginGranted: false
  }),
  methods: {
    async Login () {
      if (this.Password === '' || this.Username === '') {
        console.log('empty')
        this.msgType = 'warning'
        this.statusMsg = 'Username & Password are required !'
        this.show = true
      } else {
        console.log('login request')
        const login = await this.axios.post('http://localhost:8080/api/login', {
          username: this.Username,
          password: this.Password
        })
        console.log(login.data.status)
        if (!login.data.status) {
          console.log('combinaison non valide')
          this.msgType = 'error'
          this.statusMsg = 'Incorrect Username or Password !'
          this.show = true
        } else {
          console.log('combinaison valide')
          sessionStorage.setItem('session_username', this.Username)
          this.$router.push('/Home')
        }
      }
    },

    async createNewUser () {
      if (this.Password === '' || this.Username === '') {
        console.log('empty')
        this.msgType = 'warning'
        this.statusMsg = 'Username & Password are required !'
        this.show = true
      } else {
        // server request to know if a user already exist
        const jsondata = await this.axios.post('http://localhost:8080/api/register', {
          username: this.Username
        })
        if (!jsondata.data.status) {
          console.log('user existant')
          this.msgType = 'warning'
          this.statusMsg = 'The User ' + this.Username + ' already exist !'
          this.show = true
        } else {
          // add new user
          this.axios.post('http://localhost:8080/api/createuser', {
            username: this.Username,
            password: this.Password
          })
          this.msgType = 'success'
          this.statusMsg = 'The User ' + this.Username + ' has been successfully created !'
          this.show = true
          this.Username = ''
          this.Password = ''
        }
      }
    }
  }
}
</script>
