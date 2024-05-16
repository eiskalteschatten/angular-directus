<script setup lang="ts">
import { readItems } from '@directus/sdk';
import { directusClient } from '@/lib/directusClient';

const route = useRoute();

const { data: post, pending, error } = await useAsyncData('latestBlogPosts', async () => {
  if (!route.params.slug) {
    return null;
  }

  const res = await directusClient.request(
    readItems('blogPosts', {
      fields: ['*'],
      filter: {
        slug: { _eq: route.params.slug },
        status: { _eq: 'published' },
      },
    })
  );

  return res[0];
});

useHead({
  title: post.value?.title ?? 'Post not found',
});
</script>

<template>
  <ContainerColumn>
    <div v-if="!post && !pending">
      No post found.
    </div>
    <div v-else>
      <PageTitle>{{ post!.title }}</PageTitle>

    </div>
  </ContainerColumn>
</template>
