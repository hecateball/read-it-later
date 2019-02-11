<template>
  <icon-button v-if="authenticated" />
  <sign-in-button v-else />
</template>

<script>
import IconButton from '~/components/molecules/button/icon-button'
import SignInButton from '~/components/molecules/button/sign-in-button'
import { mapGetters } from 'vuex'

export default {
  components: {
    IconButton,
    SignInButton
  },
  computed: mapGetters({ authenticated: 'authenticated' })
}
</script>

