<script lang="ts" setup>
import type { newsItem } from 'types/global'
defineProps<{ item: newsItem }>()
</script>

<template>
  <div class="card">
    <slot />
    <footer class="card__footer">
      <p>{{ item?.source }}</p>
      <p>{{ item?.date_published }}</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 30px 30px 15px;
  border-radius: 6px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: $light;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $primary;
  }
}
</style>
