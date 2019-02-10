import firebase from 'firebase/app'

export default () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(process.env.firebase)
  }
}

