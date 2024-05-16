<script setup lang="ts">
const props = defineProps<{
  noPaddingBottom?: boolean
}>()
</script>

<template>
  <h1 class="page-title" :class="{
    'no-padding-bottom': props.noPaddingBottom,
  }">
    <slot></slot>
  </h1>
</template>

<style scoped lang="scss">
.page-title {
  font-family: 'IBM Plex Mono', monospace;
  padding-bottom: 35px;

  &.no-padding-bottom {
    padding-bottom: 0;
  }
}
</style>
