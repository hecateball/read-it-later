<template>
  <img class="sign-in-button" src="/svg/twitter-logo.svg" alt="Twitter Logo Blue" @click="signIn" />
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
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

<style scoped>
.sign-in-button {
  padding: 4px;
}
</style>