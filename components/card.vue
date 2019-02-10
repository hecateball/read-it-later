<template>
  <a :href="url">
    <div class="uk-card uk-card-default">
      <div v-if="image" class="uk-card-media-top">
        <img :src="image.src" alt="image.alt">
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">{{ title }}</h3>
        <p v-if="description" >{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
import parse from 'ogp-parser'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      title: null,
      image: null,
      description: null,
    }
  },
  beforeMount: async function() {
    const { title, ogp } = await parse(this.url, true)
    console.log(response)
    this.title = title
    this.image = ogp['og:image:secure_url'] || ogp['og:image'] ? {
      src: ogp['og:image:secure_url'] ? ogp['og:image:secure_url'] : ogp['og:image'],
      alt: ogp['og:image:alt'] ? ogp['og:image:alt'] : ''
    } : null
    this.description = ogp['og:description'] ? ogp['og:description'] : null
  }
}
</script>