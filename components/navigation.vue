<template>
  <ul class="uk-child-width-expand" uk-tab>
    <li v-for="(tab, index) in tabs" :key="index" :class="{ 'uk-active': tab.active }">
      <n-link :to="tab.destination">{{ tab.label }}</n-link>
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      tabs: [
        { label: 'Timeline', destination: '/', active: this.$route.name === 'index' },
        { label: 'Articles', destination: '/articles', active: this.$route.name === 'articles' },
        { label: 'Favorites', destination: '/favorites', active: this.$route.name === 'favorites' },
        { label: 'Archives', destination: '/archives', active: this.$route.name === 'archives' }
      ]
    }
  }
}

</script>