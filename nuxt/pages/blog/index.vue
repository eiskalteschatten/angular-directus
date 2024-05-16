<script setup lang="ts">
import { directusClient } from '@/lib/directusClient';
import { readItems } from '@directus/sdk';

const { data: posts, error } = await useAsyncData('latestBlogPosts', async () => {
  const res = await directusClient.request(
    readItems('blogPosts', {
      fields: ['*'],
      limit: 12,
      sort: '-date_published',
    })
  )

  return res;
});

useHead({
  title: 'Blog',
})
</script>

<template>
  <PageTitle>Blog</PageTitle>

  <div v-if="posts?.length === 0">No posts found</div>
  <div v-else>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
