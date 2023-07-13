<script setup lang="ts">
import type { newsItem } from 'types/global'
defineProps<{ item: newsItem }>()
</script>

<template>
  <ItemCard :item="item">
    <ItemText :item="item" />
  </ItemCard>
</template>
