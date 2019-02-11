<template>
  <button class="uk-icon-button" uk-icon="twitter" @click="signIn"></button>
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
.uk-icon-button {
  box-shadow: 1px 1px 2px;
}
</style>