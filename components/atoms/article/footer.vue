<template>
  <footer>
    <div><slot /></div>
    <img :src="src" :alt="alt" />
  </footer>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: false,
        default: () => ''
      }
    }
  }
</script>

<style lang="scss" scoped>
footer {
  font-size: 0.8rem;
  line-height: 1.4;
  color: $light-gray;
  display: flex;
  align-items: center;

  img {
    @include margin-left($margin-small);
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}
</style>