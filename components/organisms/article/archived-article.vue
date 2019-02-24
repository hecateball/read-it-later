<template>
  <article-card :image="image" :url="url">
    <date-and-time :timestamp="createdAt"></date-and-time>
    <article-title class="title">{{ title }}</article-title>
    <truncated-description v-if="description" class="description" >{{ description }}</truncated-description>
    <article-url>{{ url }}</article-url>
  </article-card>
</template>

<script>
import ArticleCard from '~/components/molecules/article/article-card'
import ArticleTitle from '~/components/atoms/article/title'
import DateAndTime from '~/components/atoms/article/date-and-time'
import TruncatedDescription from '~/components/atoms/article/truncated-description'
import ArticleUrl from '~/components/atoms/article/url'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
    ArticleCard,
    ArticleTitle,
    DateAndTime,
    TruncatedDescription,
    ArticleUrl
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
    },
    createdAt: function() {
      return this.article.get('createdAt', { serverTimestamps: 'estimate' })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  //reset uikit
  margin-top: 0;
  @include margin-bottom($margin-small);
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