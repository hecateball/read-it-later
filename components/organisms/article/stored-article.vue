<template>
  <article class="article" :style="{ backgroundImage: article.image.url ? `url(${article.image.url})` : 'none' }">
    <a :href="article.url" target="_blank" rel="noopener,nofollow,noreferer">
      <section class="main-section">
        <date-and-time>{{ article.createdAt }}</date-and-time>
        <article-title class="title">{{ article.title }}</article-title>
        <article-description v-if="article.description" class="description" >{{ article.description }}</article-description>
        <article-url>{{ article.url }}</article-url>
        <archive-button class="archive" @click.native.stop="archive" />
      </section>
    </a>
  </article>
</template>

<script>
import ArticleTitle from '~/components/atoms/article/title'
import DateAndTime from '~/components/atoms/article/date-and-time'
import ArticleDescription from '~/components/atoms/article/description'
import ArticleUrl from '~/components/atoms/article/url'
import ArchiveButton from '~/components/atoms/article/archive-button'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
    ArticleTitle,
    DateAndTime,
    ArticleDescription,
    ArticleUrl,
    ArchiveButton
  },
  props: {
    article: {
      type: Object,
      required: true,
      id: String,
      url: String,
      title: String,
      description: String,
      image: {
        type: Object,
        required: true,
        url: String
      },
      createdAt: String,
    }
  },
  methods: {
    archive: async function() {
      const user = firebase.firestore().doc(`users/${firebase.auth().currentUser.uid}`)
      const batch = firebase.firestore().batch()
      batch.set(user.collection('archives').doc(), {
        title: this.article.title,
        image: this.article.image,
        description:  this.article.description,
        url: this.article.url,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      batch.delete(user.collection('articles').doc(this.article.id))
      await batch.commit()
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