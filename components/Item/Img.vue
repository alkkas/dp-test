<script setup lang="ts">
import type { newsItem } from 'types/global'
defineProps<{ item: newsItem }>()
</script>
<template>
  <div class="img-wrapper">
    <img :src="item.imgUrl" class="card__image" />
  </div>
</template>

<style scoped lang="scss">
.img-wrapper {
  width: 200px;
  height: 100px;
  flex-shrink: 0;
  flex-grow: 0;
  @media (max-width: $tablet) {
    width: 100%;
    height: min(40vw, 200px);
  }
}
.card__image {
  border-radius: 6px;

  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
