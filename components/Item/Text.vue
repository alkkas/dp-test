<script setup lang="ts">
import type { newsItem } from 'types/global'
defineProps<{ item: newsItem }>()
</script>

<template>
  <div class="card-text">
    <h2 class="card-text__title">
      {{
        item?.title.length > 70
          ? item?.title?.slice(0, 70) + '...'
          : item?.title
      }}
    </h2>
    <p class="card-text__desc" v-html="item?.desc?.slice(0, 200) + '...'"></p>
    <a class="card-text__link" target="_blank" :href="item?.url">Подробнее</a>
  </div>
</template>

<style scoped lang="scss">
.card-text {
  text-align: left;
  color: $main;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &__title {
    font-size: 18px;
    margin-bottom: 40px;
  }
  &__desc {
    color: $dark;
  }
  &__link {
    margin: 20px 0;
    display: block;
  }
}
</style>
