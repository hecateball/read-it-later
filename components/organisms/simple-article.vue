<template>
  <article class="uk-card uk-card-default" :data-src="image" uk-img>
    <a class="uk-link-reset" :href="url">
      <section class="uk-card-body uk-overlay-default">
        <h1 class="uk-card-title uk-h4">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
        <div class="uk-text-meta uk-text-truncate">{{ url }}</div>
      </section>
    </a>
  </article>
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
    this.image = result.data.image.src
    this.description = result.data.description
  }
}
</script>

<style>
.uk-card-default {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>