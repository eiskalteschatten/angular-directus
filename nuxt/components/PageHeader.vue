<script setup lang="ts">
import { mainNavItems } from '@/lib/mainNav';
</script>

<template>
  <ContainerColumn>
    <header>
      <NuxtLink
      v-for="navItem in mainNavItems"
        :key="navItem.to"
        :to="navItem.to"
      >
        {{ navItem.label }}
      </NuxtLink>
    </header>
  </ContainerColumn>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  gap: 15px;
  height: 55px;
}
</style>
