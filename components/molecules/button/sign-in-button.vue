<template>
  <!--<img class="sign-in-button" src="/svg/twitter-logo.svg" alt="Twitter Logo Blue" @click="signIn" />-->
  <span class="sign-in-button" @click="signIn">
    <twitter-logo />
  </span>
</template>

<script>
import TwitterLogo from '~/assets/svg/twitter-logo.svg'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components: {
    TwitterLogo
  },
  methods: {
    signIn: async function() {
      const provider = new firebase.auth.TwitterAuthProvider()
      const result = await firebase.auth().signInWithPopup(provider)
        .catch(({ code, message }) => {
          console.error(code)
          console.error(message)
          return null
        })
      if (!result) {
        return
      }
      console.log(result.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in-button * {
  width: 100%;
  height: auto;
  padding: 4px;
}
</style>