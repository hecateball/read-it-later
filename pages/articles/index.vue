<template>
  <div class="uk-padding-small uk-margin-medium-top">
    <simple-article class="uk-margin-small" v-for="(url, index) in urls" :key="index" :url="url"/>
  </div>
</template>

<script>
import SimpleArticle from '~/components/organisms/simple-article'

export default {
  components: {
    SimpleArticle
  },
  data: function() {
    return {
      urls: [
        'https://itunes.apple.com/jp/story/id1296490350',
        'https://www.melonbooks.co.jp/detail/detail.php?product_id=472076&utm_source=twitter_190211&utm_medium=215001036346',
        'https://togetter.com/li/1317522'
      ]
    }
  }
}
</script>