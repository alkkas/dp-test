<template>
  <h1 class="title"><slot /></h1>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title {
  color: $dark;
  font-size: 36px;
  @media (max-width: $tablet) {
    font-size: 24px;
  }
}
</style>
