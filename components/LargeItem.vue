<script setup lang="ts">
import type { newsItem } from 'types/global'
defineProps<{ item: newsItem }>()
</script>

<template>
  <ItemCard :item="item">
    <div class="long-item">
      <ItemImg :item="item" />
      <ItemText :item="item" />
    </div>
  </ItemCard>
</template>

<style scoped lang="scss">
.long-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  @media (max-width: $tablet) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
