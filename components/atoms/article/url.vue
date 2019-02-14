<template>
  <div><slot /></div>
</template>

<style lang="scss" scoped>
div {
  @include text-truncate;
  font-size: 0.875rem;
  line-height: 1.4;
  color: $dark-gray;
}
</style>