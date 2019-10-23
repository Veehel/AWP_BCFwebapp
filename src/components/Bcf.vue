<template>
  <div>
    <ul>
      <li v-bind:key="meme.id" v-for="meme in memes">
        <v-card
          :elevation="elevation"
          :flat="flat"
          :height="height"
          :loading="loading"
          :outlined="outlined"
          :raised="raised"
          :width="width"
          class="mx-auto"
        >
          <v-img
            class="white--text"
            height="auto"
            v-bind:src="meme.image"
            v-if="media"
            width="auto"
          >
          </v-img>
          <v-divider></v-divider>
          <v-card-text>{{ meme.title }}</v-card-text>
          <v-divider></v-divider>
          <v-card-actions v-if="actions">
            <v-btn icon>
              <v-icon>mdi-arrow-up-box</v-icon>
            </v-btn>
            <v-textarea
              label="Comment"
              auto-grow
              counter
              maxlength="240"
              full-width
              filled
              single-line
            ></v-textarea>
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
    memes: [
      {
        id: 0,
        title: "Life Choices",
        image:
          "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70842722_779928862463384_6556138169979371520_n.jpg?_nc_cat=103&_nc_oc=AQkPI3wBZzZz7Q_3V7U5XmdODwpKJhBq02xX2L0kip7-jvEkNT0uodGDb7rO0CkoaaI&_nc_ht=scontent-cdg2-1.xx&oh=131b3fe9ff0e74625aaa13f2b6bb9f0f&oe=5E309869"
      },
      {
        id: 1,
        title: "Stop !",
        image:
          "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/71573257_790348884754715_8246201354209460224_n.jpg?_nc_cat=106&_nc_oc=AQmB8Tyfed7VVgbhWrrPtZJEJUyxQVzHeOV70WP3C6gjobkFZleZcYo1MqN4nZn3weM&_nc_ht=scontent-cdg2-1.xx&oh=24da8ec9f998a9fa542e8b121189a02e&oe=5E6118E1"
      },
      {
        id: 2,
        title: "Job Interview",
        image:
          "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70504862_783029895486614_6712234972486303744_n.jpg?_nc_cat=105&_nc_oc=AQnprZSpljtXbhIAyjuTQK7snEEtF2HFM_3wf3gJ_WX9YCf41b01zJdUU_9zkzxdK88&_nc_ht=scontent-cdg2-1.xx&oh=f0d457c154850e14133208bcf7575955&oe=5E01C626"
      }
    ]
  })
};
</script>
