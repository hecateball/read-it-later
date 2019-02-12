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

<style scoped>
.profile-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F5F8FA;
  box-shadow: 1px 1px 2px;
  transition: .1s ease-in-out;
  transition-property: background-color;
}

.profile-circle:focus, .profile-circle:hover {
  background: #E1E8ED;
}

.profile-circle:active {
  background: #AAB8C2;
}
</style>