<template>
  <article-card :image="article.image" :url="article.url">
    <date-and-time>{{ article.createdAt }}</date-and-time>
    <article-title v-if="article.title" class="title">{{ article.title }}</article-title>
    <article-title v-else class="title">Loading...</article-title>
    <article-description v-if="article.description" class="description" >{{ article.description }}</article-description>
    <article-url class="url">{{ article.url }}</article-url>
    <archive-button class="archive" @click.stop.native="archive" />
  </article-card>
</template>

<script>
import ArticleCard from '~/components/molecules/article/article-card'
import ArticleTitle from '~/components/atoms/article/title'
import DateAndTime from '~/components/atoms/article/date-and-time'
import ArticleDescription from '~/components/atoms/article/description'
import ArticleUrl from '~/components/atoms/article/url'
import ArchiveButton from '~/components/atoms/article/archive-button'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
    ArticleCard,
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
.title {
  //reset uikit
  margin-top: 0;
  @include margin-bottom($margin-small);
}

.description {
  @include margin-top;
  @include margin-bottom;
}

.url {
  @include margin-bottom($margin-small);
}

.archive {
  @include position-absolute;
  @include position-right;
  @include margin-bottom($margin-small);
  @include margin-right($margin-small);
  z-index: 1;
}
</style>