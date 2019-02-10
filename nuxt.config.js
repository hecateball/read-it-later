module.exports = {
  mode: 'universal',
  loading: false,
  modern: true,
  plugins: [
    '~/plugins/firebase.js'
  ],
  build: {
    publicPath: '/client/'
  },
  env: {
    firebase: {
      apiKey: "AIzaSyDGLoAm_vG9GO_82zxKRtWpHHb4Eby5jGY",
      authDomain: "flake-me.firebaseapp.com",
      databaseURL: "https://flake-me.firebaseio.com",
      projectId: "flake-me",
      storageBucket: "flake-me.appspot.com",
      messagingSenderId: "434647058224"
    }
  },
  head: {
    title: 'Flake'
  }
}
