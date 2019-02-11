import EventEmitter from 'events'
import firebase from 'firebase/app'
import 'firebase/auth'

export default ({ store }) => {
  const emitter = new EventEmitter()
  firebase.auth().onAuthStateChanged((user) => {
    store.dispatch('authenticated', user !== null)
    emitter.emit('firebase:auth:ready')
  })
  return new Promise((resolve) => emitter.once('firebase:auth:ready', resolve))
}

