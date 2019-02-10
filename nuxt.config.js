module.exports = {
  mode: 'universal',
  loading: false,
  modern: true,
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/uikit.client.js'
  ],
  build: {
    publicPath: '/client/',
    quiet: false
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
    title: 'Flake',
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ]
  },
  css: ['uikit/dist/css/uikit.css']
}
