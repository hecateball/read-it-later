<template>
  <div class="uk-section uk-inline uk-width-1-1 uk-padding-remove-vertical">
    <navigation class="uk-position-top uk-position-fixed uk-position-z-index" />
    <no-ssr>
      <profile-circle class="uk-position-top-right uk-position-fixed uk-position-z-index uk-margin-small-top uk-margin-small-right" />
    </no-ssr>
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/organisms/navigation'
import ProfileCircle from '~/components/organisms/profile-circle'

export default {
  components: {
    Navigation,
    ProfileCircle
  }
}
</script>