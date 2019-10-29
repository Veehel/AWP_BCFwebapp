<template>
  <div class="container-fluid">
    <ul>
      <li v-bind:key='meme.id' v-for='meme in memes'>
        <v-card
          :elevation='elevation'
          :flat='flat'
          :height='height'
          :loading='loading'
          :outlined='outlined'
          :raised='raised'
          :width='width'
          class='mx-auto'
        >
          <v-img
            class='white--text'
            height='auto'
            v-bind:src='meme.image'
            v-if='media'
            width='auto'
          >
          </v-img>
          <v-divider></v-divider>
          <v-card-text>{{ meme.title }}</v-card-text>
          <v-divider></v-divider>
          <v-card-actions v-if='actions'>
            <v-btn icon @click="upvote ()">
              <v-icon>mdi-arrow-up-box</v-icon>
            </v-btn>
            <span class="label label-priamry">{{meme.votes}}</span>
            <v-btn icon @click="downvote ()">
              <v-icon>mdi-arrow-down-box</v-icon>
            </v-btn>
            <v-text-field
              label='Comment'
              auto-grow
              counter
              maxlength='240'
              full-width
              filled
              single-line
            ></v-text-field>
            <v-btn
            color="brown"
            @click="Comment">
              Comment
            </v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.v-input__slider {
  width: 100%;
}
.input_group_details::after {
  background-color: rgba(255, 255, 255, 0.32) !important
}
</style>

<script>
export default {
  data: () => ({
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    elevation: undefined,
    raised: false,
    width: 344,
    height: undefined,
    upvoted: false,
    downvoted: false,
    memes: [
      {
        id: 0,
        title: 'Life Choices',
        votes: 1,
        image:
          'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70842722_779928862463384_6556138169979371520_n.jpg?_nc_cat=103&_nc_oc=AQkPI3wBZzZz7Q_3V7U5XmdODwpKJhBq02xX2L0kip7-jvEkNT0uodGDb7rO0CkoaaI&_nc_ht=scontent-cdg2-1.xx&oh=131b3fe9ff0e74625aaa13f2b6bb9f0f&oe=5E309869'
      },
      {
        id: 1,
        title: 'Stop !',
        votes: 1,
        image:
          'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/71573257_790348884754715_8246201354209460224_n.jpg?_nc_cat=106&_nc_oc=AQmB8Tyfed7VVgbhWrrPtZJEJUyxQVzHeOV70WP3C6gjobkFZleZcYo1MqN4nZn3weM&_nc_ht=scontent-cdg2-1.xx&oh=24da8ec9f998a9fa542e8b121189a02e&oe=5E6118E1'
      },
      {
        id: 2,
        title: 'Job Interview',
        votes: 1,
        image:
          'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70504862_783029895486614_6712234972486303744_n.jpg?_nc_cat=105&_nc_oc=AQnprZSpljtXbhIAyjuTQK7snEEtF2HFM_3wf3gJ_WX9YCf41b01zJdUU_9zkzxdK88&_nc_ht=scontent-cdg2-1.xx&oh=f0d457c154850e14133208bcf7575955&oe=5E01C626'
      },
      {
        id: 3,
        title: 'True Love',
        votes: 1,
        image:
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/72899500_805833559872914_2168520664103780352_n.jpg?_nc_cat=108&_nc_oc=AQlhsvq2yiEMVcx4JmCvdKWmZFIBJ9SixwcIy_kkY0wlQhPN2ewwQMcxDm6MDsd9wuk&_nc_ht=scontent-cdg2-1.xx&oh=e6d7600b7c7dbf4ad04d590c860dee97&oe=5E511DAD'
      },
      {
        id: 4,
        title: 'this is not possible',
        votes: 1,
        image:
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/72129605_795617784227825_5382649368367071232_n.jpg?_nc_cat=107&_nc_oc=AQmqg36CI0gl2Q-sCA-3ON7cQLIh9dX7BpnU84U4PCa2lcjRQzsz68ZOjNXKz4HrojQ&_nc_ht=scontent-cdg2-1.xx&oh=6ae319885f7f81345a675ed1131bf632&oe=5E21F39D'
      },
      {
        id: 5,
        title: 'FBI Proud',
        votes: 1,
        image:
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/72440000_799474870508783_1962638597861408768_n.jpg?_nc_cat=110&_nc_oc=AQlLcpoQXaZZpyojea0bc_zmTZFEKQBBagAA_2cV-ydoGbyK3rGREFGVwiYt7bUDaLM&_nc_ht=scontent-cdg2-1.xx&oh=4e8667e80d0fd4bc6defda8217681d2b&oe=5E1E9DCC'
      },
      {
        id: 6,
        title: 'IT MUST BE SEALED',
        votes: 1,
        image:
        'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/72526869_801221640334106_5577787067112357888_n.png?_nc_cat=104&_nc_oc=AQkIbv0q8_hcC6FgLn2AAR-3-el0IVfNxud1D3ZCBLvWRZR0gBoQn0FBeneb4CPsTEY&_nc_ht=scontent-cdg2-1.xx&oh=5e7745130b1e7abdf500e09910293eda&oe=5E5BBC43'
      }
    ]
  }),
  methods: {
    Comment () {
      this.comment.push({
        id: this.comment.length,
        comment: this.comment
      })
      console.log('Comment posted')
    },
    upvote () {
      this.upvoted = !this.upvoted
      this.downvoted = false
    },
    downvote () {
      this.downvoted = !this.downvoted
      this.upvoted = false
    }
  },
  computed: {
    votes () {
      if (this.upvoted) {
        return this.meme.votes + 1
      } else if (this.downvoted) {
        return this.memes.votes - 1
      } else {
        return this.memes.votes
      }
    }
  }
}
</script>
