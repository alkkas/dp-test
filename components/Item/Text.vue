<template>
  <div class="card-text">
    <h2 class="card-text__title">asdfasdf</h2>
    <p class="card-text__desc">
      asdfasdfasdf asdfasdfasdf asdfasdfasdf asdfasdfasdf asdfasdfasdf
    </p>
    <a class="card-text__link">adsfasdf</a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card-text {
  text-align: left;
  color: $main;
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
