<template>
  <article class="article" :style="{ backgroundImage: image.url ? `url(${image.url})` : 'none' }">
    <section class="main-section" @click="open">
      <date-and-time :timestamp="createdAt"></date-and-time>
      <article-title class="title">{{ title }}</article-title>
      <truncated-description v-if="description" class="description" >{{ description }}</truncated-description>
      <article-url>{{ url }}</article-url>
    </section>
  </article>
</template>

<script>
import ArticleTitle from '~/components/atoms/article/title'
import DateAndTime from '~/components/atoms/article/date-and-time'
import TruncatedDescription from '~/components/atoms/article/truncated-description'
import ArticleUrl from '~/components/atoms/article/url'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
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
  },
  methods: {
    open: function() {
      window.open(this.url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.1s ease-in-out;
  background: no-repeat;
  background-size: cover;
}

.main-section {
  @include padding($padding-xlarge);
  background: rgba(255, 255, 255, 0.8);
}

.overlay {
  background: rgba(255, 255, 255, 0.8);
}

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