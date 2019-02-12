<template>
  <img class="icon-button" :src="image.src" :alt="image.alt" />
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: function() {
    return {
      image: {
        src: firebase.auth().currentUser.photoURL,
        alt: firebase.auth().currentUser.displayName
      }
    }
  }
}
</script>

<style scoped>
.icon-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>