<template>
  <div>
    <div class="article-container" v-if="articles.length">
      <public-article class="article" v-for="article in articles" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import PublicArticle from '~/components/organisms/article/public-article'
import InputForm from '~/components/molecules/article/input-form'
import { mapGetters } from 'vuex'

export default {
  components: {
    PublicArticle,
    InputForm
  },
  computed: mapGetters('articles', { articles: 'articles' }),
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