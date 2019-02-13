<template>
  <div>
    <div class="article-container">
      <simple-article class="article" v-for="(url, index) in urls" :key="index" :url="url"/>
    </div>
    <no-ssr>
      <input-form v-if="authenticated" class="input-form" />
    </no-ssr>
  </div>
</template>

<script>
import SimpleArticle from '~/components/organisms/simple-article'
import InputForm from '~/components/organisms/input-form'
import { mapGetters } from 'vuex'

export default {
  components: {
    SimpleArticle,
    InputForm
  },
  data: function() {
    return {
      urls: [
        'https://itunes.apple.com/jp/story/id1296490350',
        'https://twitter.com/horodamsmr/status/1095011949522251777',
        'https://togetter.com/li/1317522'
      ]
    }
  },
  computed: mapGetters({ authenticated: 'authenticated' })
}
</script>

<style lang="scss" scoped>
.article-container {
  @include margin-top($margin-xlarge);
  padding: 16px; //TODO
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