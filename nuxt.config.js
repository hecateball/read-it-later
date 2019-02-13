module.exports = {
  mode: 'universal',
  loading: false,
  modern: true,
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader'
  ],
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/firebase.client.js',
    '~/plugins/uikit.client.js'
  ],
  build: {
    publicPath: '/client/',
    quiet: process.env.GCLOUD_PROJECT === 'mikuappend-jp'
  },
  styleResources: {
    sass: [ '~/assets/scss/_import.scss' ]
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
  css: ['uikit/dist/css/uikit.css'],
  manifest: {
    name: 'Read It Later',
    lang: 'ja',
    short_name: 'ReadItLater',
    title: 'Read It Later',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
}
