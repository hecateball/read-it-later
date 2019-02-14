<template>
  <div class="twitter-logo">
    <twitter-logo />
  </div>
</template>

<script>
import TwitterLogo from '~/assets/svg/twitter-logo.svg'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components: {
    TwitterLogo
  }
}
</script>

<style lang="scss" scoped>
.twitter-logo * * {
  width: 100%;
  height: auto;
  padding: 4px;
}
</style>