<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
]
</script>

<template>
  <NuxtLink :to="navItem.to" v-for="navItem in navItems">
    <h1>{{ navItem.label }}</h1>
  </NuxtLink>

  <NuxtPage />
</template>
