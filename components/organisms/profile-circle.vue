<template>
  <div class="profile-circle">
    <icon-button v-if="authenticated" />
    <sign-in-button v-else />
  </div>
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

<style lang="scss" scoped>
.profile-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px;
  transition: .1s ease-in-out;
  transition-property: background-color;
  background: $extra-extra-light-gray;

  &:focus, &:hover { background: $extra-light-gray }
  &:active { background: $light-gray }
}
</style>