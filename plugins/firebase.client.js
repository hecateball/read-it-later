import EventEmitter from 'events'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default ({ store }) => {
  const emitter = new EventEmitter()
  firebase.auth().onAuthStateChanged((user) => {
    store.dispatch('authenticated', user !== null)
    if (user) {
      const unsubscribe = firebase.firestore()
        .collection(`users/${user.uid}/articles`)
        .orderBy('createdAt', 'desc')
        .onSnapshot(({ docs }) => store.dispatch('articles/articles', docs))
      emitter.on('firebase:auth:signOut', unsubscribe)
    }
    if (!user) {
      emitter.emit('firebase:auth:signOut')
    }
    emitter.emit('firebase:auth:ready')
  })
  return new Promise((resolve) => emitter.once('firebase:auth:ready', resolve))
}

