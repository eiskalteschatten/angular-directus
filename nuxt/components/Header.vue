<script setup lang="ts">
import { mainNavItems } from '@/lib/mainNav';
</script>

<template>
  <Container>
    <header>
      <NuxtLink :to="navItem.to" v-for="navItem in mainNavItems">
        {{ navItem.label }}
      </NuxtLink>
    </header>
  </Container>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  gap: 15px;
  height: 55px;
}
</style>
