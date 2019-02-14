<template>
  <img :src="image.src" :alt="image.alt" />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
      src: String,
      alt: String,
    }
  }
}
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>