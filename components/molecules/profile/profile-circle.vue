<template>
  <div class="profile-circle">
    <profile-photo v-if="authenticated" :image="image" />
    <twitter-logo v-else @click.native="signIn" />
  </div>
</template>

<script>
import ProfilePhoto from '~/components/atoms/profile/photo'
import TwitterLogo from '~/components/atoms/profile/twitter-logo'
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProfilePhoto,
    TwitterLogo
  },
  computed: {
    ...mapGetters({ authenticated: 'authenticated' }),
    image: function () {
      return this.authenticated ? {
        src: firebase.auth().currentUser.photoURL,
        alt: firebase.auth().currentUser.displayName
      } : null
    }
  },
  methods: {
    signIn: async function() {
      const provider = new firebase.auth.TwitterAuthProvider()
      await firebase.auth().signInWithPopup(provider)
        .catch(({ code, message }) => {
          console.error(code)
          console.error(message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px;
  background: $extra-extra-light-gray;
  transition: .1s ease-in-out;
  transition-property: background;
  &:focus, &:hover { background: $extra-light-gray }
  &:active { background: $light-gray }
}
</style>