<template>
  <article v-if="image" class="uk-card uk-card-default" :data-src="image.src" uk-img>
    <a class="uk-link-reset" :href="url">
      <section class="uk-card-body uk-overlay-default">
        <h1 class="uk-card-title uk-h4">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
        <div class="uk-text-meta uk-text-truncate">{{ url }}</div>
      </section>
    </a>
  </article>
  <div v-else class="uk-card uk-card-default">
    <a class="uk-link-reset" :href="url">
      <div class="uk-card-body">
        <h3 class="uk-card-title">{{ title }}</h3>
        <p v-if="description" >{{ description }}</p>
      </div>
    </a>
  </div>
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

<style>
canvas {
  width: 50%;
  height: auto;
}
</style>