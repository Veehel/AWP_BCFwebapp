<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Sign In Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-text-field
                            v-model="Username"
                            label="Username"
                            required
                            clearable
                            outlined
                            rounded
                            dense
                            >
                          </v-text-field>
                          <v-text-field
                            v-model="Password"
                            label="Password"
                            type='password'
                            required
                            clearable
                            outlied
                            rounded
                            dense
                          >
                          </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="Login"
                            >Sign In</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="createNewUser"
                            >Sign up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
    Username: '',
    Password: '',
    show: false,
    msgType: 'error',
    statusMsg: '',
    loginGranted: false,
    valid: false
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
        const login = await this.axios.post('/api/login', {
          username: this.Username,
          password: this.Password
        })
        console.log(login.data.status)
        if (!login.data.status) {
          console.log('password or username invalid')
          this.msgType = 'error'
          this.statusMsg = 'Username or Password invalid !'
          this.show = true
        } else {
          console.log('valid entry')
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
        const jsondata = await this.axios.post('/api/register', {
          username: this.Username
        })
        if (!jsondata.data.status) {
          console.log('user existant')
          this.msgType = 'warning'
          this.statusMsg = 'The User ' + this.Username + ' already exist !'
          this.show = true
        } else {
          // add new user
          this.axios.post('/api/createuser', {
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
<style>
  .input-group__details:after {
    background-color: rgba(255, 255, 255, 0.32) !important;
  }
</style>
