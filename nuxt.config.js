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
    quiet: process.env.GCLOUD_PROJECT === 'mikuappend-jp'
  },
  env: {
    firebase: {
      apiKey: 'AIzaSyBOY61vdiNM6FIK6vmfYOAGU2IwOEvb8Gw',
      authDomain: 'mikuappend-jp.firebaseapp.com',
      databaseURL: 'https://mikuappend-jp.firebaseio.com',
      projectId: 'mikuappend-jp',
      storageBucket: 'mikuappend-jp.appspot.com',
      messagingSenderId: '473622708887'
    }
  },
  head: {
    title: 'Read It Later',
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ]
  },
  css: ['uikit/dist/css/uikit.css']
}
