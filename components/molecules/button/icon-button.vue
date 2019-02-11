<template>
  <div class="uk-icon-button" :data-src="src" uk-img></div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: function() {
    return {
      src: firebase.auth().currentUser.photoURL
    }
  }
}
</script>

<style scoped>
.uk-icon-button {
  background-size: cover;
  box-shadow: 1px 1px 2px;
}
</style>