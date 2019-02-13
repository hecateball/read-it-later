<template>
  <article class="uk-card uk-card-default" :data-src="image.url" uk-img>
    <a class="uk-link-reset" :href="url" target="_blank">
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
import 'firebase/firestore'

export default {
  props: {
    article: {
      type: firebase.firestore.DocumentSnapshot,
      required: true
    }
  },
  computed: {
    url: function() {
      return this.article.get('url')
    },
    title: function() {
      return this.article.get('title').length !== 0 ? this.article.get('title') : 'Loading...'
    },
    image: function() {
      return this.article.get('image')
    },
    description: function() {
      return this.article.get('description')
    },
  }
}
</script>

<style>
.uk-card-default {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>