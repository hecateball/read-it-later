<template>
  <div class="uk-inline uk-margin-small-bottom uk-margin-small-right">
    <form @submit.prevent="submit">
      <button type="submit" class="uk-icon uk-form-icon uk-form-icon-flip" uk-icon="icon: plus"></button>
      <input class="uk-input" type="text" placeholder="https://..." v-model="url" />
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      url: ''
    }
  },
  methods: {
    submit: function() {
      console.log(this.url)
      this.url = ''
    }
  }
}
</script>

<style scoped>
.uk-input {
  border-radius: 20px;
}
</style>