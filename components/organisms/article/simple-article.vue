<template>
  <article class="uk-card uk-card-default" :style="{ backgroundImage: image.url ? `url(${image.url})` : 'none' }">
    <section class="uk-card-body uk-overlay-default" @click="open">
      <article-title class="title">{{ title }}</article-title>
      <article-description v-if="description" class="description" >{{ description }}</article-description>
      <article-url>{{ url }}</article-url>
      <article-archive-button class="archive" @click.native.stop="archive" />
    </section>
  </article>
</template>

<script>
import ArticleTitle from '~/components/atoms/article/title'
import ArticleDescription from '~/components/atoms/article/description'
import ArticleUrl from '~/components/atoms/article/url'
import ArticleArchiveButton from '~/components/atoms/article/archive-button'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
    ArticleTitle,
    ArticleDescription,
    ArticleUrl,
    ArticleArchiveButton
  },
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
      return this.article.get('title')
    },
    image: function() {
      return this.article.get('image')
    },
    description: function() {
      return this.article.get('description')
    }
  },
  methods: {
    open: function() {
      window.open(this.url, '_blank')
    },
    archive: function() {
      console.log('archive')
    }
  }
}
</script>

<style lang="scss" scoped>
.uk-card-default {
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  @include margin-bottom;
}

.description {
  @include margin-top;
  @include margin-bottom;
}

.archive {
  @include position-absolute;
  @include position-right;
  @include margin-bottom($margin-small);
  @include margin-right($margin-small);
}
</style>