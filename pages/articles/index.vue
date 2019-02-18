<template>
  <div>
    <div class="article-container" v-if="articles.length">
      <stored-article class="article" v-for="article in articles" :key="article.id" :article="article"/>
    </div>
    <no-ssr>
      <input-form v-if="authenticated" class="input-form" />
    </no-ssr>
  </div>
</template>

<script>
import StoredArticle from '~/components/organisms/article/stored-article'
import InputForm from '~/components/molecules/article/input-form'
import { mapGetters } from 'vuex'

export default {
  components: {
    StoredArticle,
    InputForm
  },
  computed: {
    ...mapGetters({ authenticated: 'authenticated' }),
    ...mapGetters('articles', { articles: 'articles' })
  },
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