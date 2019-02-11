<template>
  <div class="uk-section uk-inline uk-padding-remove-vertical">
    <navigation class="uk-position-top uk-position-fixed uk-position-z-index" />
    <nuxt />
    <input-form class="uk-position-bottom-right uk-position-fixed uk-position-z-index" />
  </div>
</template>

<script>
import Navigation from '~/components/organisms/navigation'
import InputForm from '~/components/organisms/input-form'

export default {
  components: {
    Navigation,
    InputForm
  }
}
</script>