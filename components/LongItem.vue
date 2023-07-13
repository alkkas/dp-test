<template>
  <ItemCard>
    <div class="long-item">
      <ItemImg />
      <ItemText />
    </div>
  </ItemCard>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.long-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  & .card-text {
    flex-grow: 1;
  }
}
</style>
