<template>
  <div class="uk-inline">
    <form @submit.prevent="submit">
      <button type="submit" class="uk-icon uk-form-icon uk-form-icon-flip" uk-icon="icon: plus"></button>
      <input class="uk-input" type="text" placeholder="https://..." v-model="url" />
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  data: function() {
    return {
      url: ''
    }
  },
  methods: {
    submit: async function() {
      if (!firebase.auth().currentUser) {
        return
      }
      await firebase.firestore()
        .collection(`users/${firebase.auth().currentUser.uid}/articles`)
        .add({
          url: this.url,
          title: 'Loading...',
          image: { url: '', alt: '' },
          description: null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        })
      this.url = ''
    }
  }
}
</script>

<style scoped>
.uk-input {
  border-radius: 20px;
}
</style>