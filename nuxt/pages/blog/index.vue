<script setup lang="ts">
import { directusClient } from '@/lib/directusClient';
import { readItems } from '@directus/sdk';

const { data: posts, pending, error } = await useAsyncData('latestBlogPosts', async () => {
  const res = await directusClient.request(
    readItems('blogPosts', {
      fields: ['*'],
      limit: 12,
      sort: '-date_published',
    })
  )

  return res;
});

console.log('data', posts);
console.log('pending', pending);
console.log('error', error);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
