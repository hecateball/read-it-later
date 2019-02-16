<template>
  <div>
    <div class="article-container" v-if="articles.length">
      <archived-article class="article" v-for="article in articles" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import ArchivedArticle from '~/components/organisms/article/archived-article'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  components: {
    ArchivedArticle
  },
  data: function() {
    return {
      articles: []
    }
  },
  mounted: async function() {
    if (firebase.auth().currentUser) {
      const archives = await firebase.firestore()
        .collection(`users/${firebase.auth().currentUser.uid}/archives`)
        .orderBy('createdAt', 'desc')
        .get()
      this.articles = archives.docs
    }
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