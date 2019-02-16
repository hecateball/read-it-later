<template>
  <time>{{ time }}</time>
</template>

<script>
export default {
  props: {
    timestamp: Object,
    required: true
  },
  computed: {
    time: function() {
      return this.timestamp.toDate().toLocaleString('ja-JP')
    }
  }
}
</script>

<style lang="scss" scoped>
time {
  font-size: 0.7rem;
  color: $dark-gray;
}
</style>