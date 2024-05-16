<script setup lang="ts">
useHead({
  titleTemplate: (subTitle) => {
    return subTitle
      ? `${subTitle} - Directus Blog`
      : 'Directus Blog'
  },
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
});
</script>

<template>
  <Header />

  <NuxtPage />
</template>
