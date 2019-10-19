<template>
  <div>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="auto"
<<<<<<< HEAD
        width=""
=======
        width="auto"
>>>>>>> e421d0222e46b9371dc4230f7609485d94a964f2
        src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70504862_783029895486614_6712234972486303744_n.jpg?_nc_cat=105&_nc_oc=AQnprZSpljtXbhIAyjuTQK7snEEtF2HFM_3wf3gJ_WX9YCf41b01zJdUU_9zkzxdK88&_nc_ht=scontent-cdg2-1.xx&oh=f0d457c154850e14133208bcf7575955&oe=5E01C626"
      >
      </v-img>
      <v-card-text>I'm card text</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-arrow-up-box</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
<v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="auto"
        width="auto"
        src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/70842722_779928862463384_6556138169979371520_n.jpg?_nc_cat=103&_nc_oc=AQkPI3wBZzZz7Q_3V7U5XmdODwpKJhBq02xX2L0kip7-jvEkNT0uodGDb7rO0CkoaaI&_nc_ht=scontent-cdg2-1.xx&oh=131b3fe9ff0e74625aaa13f2b6bb9f0f&oe=5E309869"
      >
      </v-img>
      <v-card-title v-else>I'm a title</v-card-title>

      <v-card-text>I'm card text</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-arrow-up-box</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
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
    height: undefined
  })
}
</script>
