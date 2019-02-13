<template>
  <div class="uk-section uk-inline uk-width-1-1 uk-padding-remove-vertical">
    <navigation class="uk-position-top uk-position-fixed uk-position-z-index" />
    <no-ssr>
      <profile-circle class="profile-circle" />
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

<style lang="scss" scoped>
.profile-circle {
  @include position-top-right;
  @include position-fixed;
  @include position-z-index;
  @include margin-top($margin-small);
  @include margin-right($margin-small);
}
</style>