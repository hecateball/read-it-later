<template>
  <div>
    <div class="article-container" v-if="articles.length">
      <public-article class="article" v-for="article in articles" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import PublicArticle from '~/components/organisms/article/public-article'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  components: {
    PublicArticle
  },
  data: function() {
    return {
      articles: []
    }
  },
  mounted: async function() {
    const archives = await firebase.firestore()
      .collection(`articles`)
      .orderBy('createdAt', 'desc')
      .get()
    this.articles = archives.docs.map((snapshot) => ({
      id: snapshot.id,
      user: snapshot.get('user'),
      url: snapshot.get('url'),
      title: snapshot.get('title'),
      description: snapshot.get('description'),
      image: snapshot.get('image'),
      createdAt: snapshot.get('createdAt', { serverTimestamps: 'estimate' }).toDate().toLocaleString('ja-JP')
    }))
  }

}
</script>

<style lang="scss" scoped>
.article-container {
  @include margin-top($margin-xlarge);
  @include padding;
}

.article {
  @include margin-bottom($margin-small);
  &+.article { @include margin-top($margin-small); }
}
</style>