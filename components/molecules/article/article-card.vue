<template>
  <article class="article" :style="{ backgroundImage: image && image.url ? `url(${image.url})` : 'none' }">
    <section class="main-section" @click="open">
      <slot/>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: false,
      default: () => null,
      url: String
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    open: function() {
      window.open(this.url, '_blank').opener = null
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
</style>