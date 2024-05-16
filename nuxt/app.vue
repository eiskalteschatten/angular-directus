<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
];

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
  <NuxtLink :to="navItem.to" v-for="navItem in navItems">
    <h1>{{ navItem.label }}</h1>
  </NuxtLink>

  <NuxtPage />
</template>
