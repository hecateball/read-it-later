<template>
  <a :href="url">
    <div class="uk-card uk-card-default">
      <div v-if="image" class="uk-card-media-top">
        <img :src="image.src" :alt="image.alt">
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">{{ title }}</h3>
        <p v-if="description" >{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/functions'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      title: null,
      image: null,
      description: null,
    }
  },
  beforeMount: async function() {
    const result = await firebase.app()
      .functions('asia-northeast1').httpsCallable('openGraph')({ url: this.url })
    this.title = result.data.title
    this.image = result.data.image
    this.description = result.data.description
  }
}
</script>