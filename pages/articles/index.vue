<template>
  <div>
    <div class="article-container" v-if="articles.length">
      <simple-article class="article" v-for="article in articles" :key="article.id" :article="article"/>
    </div>
    <no-ssr>
      <input-form v-if="authenticated" class="input-form" />
    </no-ssr>
  </div>
</template>

<script>
import SimpleArticle from '~/components/organisms/article/simple-article'
import InputForm from '~/components/molecules/article/input-form'
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  components: {
    SimpleArticle,
    InputForm
  },
  data: function() {
    return {
      articles: []
    }
  },
  computed: mapGetters({ authenticated: 'authenticated' }),
  mounted: async function() {
    if (this.authenticated) {
      const unsubscribe = firebase.firestore()
        .collection(`users/${firebase.auth().currentUser.uid}/articles`)
        .orderBy('createdAt', 'desc')
        .onSnapshot(({ docs }) => this.articles = docs)
      this.$once('hook:beforeDestroy', unsubscribe)
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

.input-form {
  @include position-bottom-right;
  @include position-fixed;
  @include position-z-index;
  @include margin-bottom($margin-large);
  @include margin-right($margin-large);
}
</style>