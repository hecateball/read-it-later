<template>
  <div>
    <card v-for="(url, index) in urls" :key="index" :url="url"/>
  </div>
</template>

<script>
import Card from '~/components/card'

export default {
  components: {
    Card
  },
  data: function() {
    return {
      urls: [
        'https://itunes.apple.com/jp/story/id1296490350',
        'https://www.wantedly.com/projects/277202',
        'https://togetter.com/li/1317522'
      ]
    }
  }
}
</script>