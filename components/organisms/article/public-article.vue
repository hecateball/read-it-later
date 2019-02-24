<template>
  <article-card :image="article.image" :url="article.url">
    <date-and-time>{{ article.createdAt }}</date-and-time>
    <article-title class="title">{{ article.title }}</article-title>
    <article-description v-if="article.description" class="description" >{{ article.description }}</article-description>
    <article-url class="url">{{ article.url }}</article-url>
    <article-footer class="footer" :src="article.user.photoURL" :alt="article.user.displayName">stored by {{ article.user.displayName }}</article-footer>
  </article-card>
</template>

<script>
import ArticleCard from '~/components/molecules/article/article-card'
import ArticleTitle from '~/components/atoms/article/title'
import DateAndTime from '~/components/atoms/article/date-and-time'
import ArticleDescription from '~/components/atoms/article/description'
import ArticleUrl from '~/components/atoms/article/url'
import ArticleFooter from '~/components/atoms/article/footer'

export default {
  components: {
    ArticleCard,
    ArticleTitle,
    DateAndTime,
    ArticleDescription,
    ArticleUrl,
    ArticleFooter
  },
  props: {
    article: {
      type: Object,
      required: true,
      id: String,
      user: {
        type: Object,
        displayName: String,
        photoURL: String
      },
      url: String,
      title: String,
      description: String,
      image: {
        type: Object,
        required: true,
        url: String
      },
      createdAt: String
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

.url {
  @include margin-bottom($margin-small);
}

.footer {
  @include position-absolute;
  @include position-bottom-right;
  @include padding-bottom($padding-small);
  @include padding-right($padding-small);
}
</style>