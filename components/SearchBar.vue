<template>
  <div class="search-bar-container">
    <input class="search-bar" />
    <Icon svgName="search" :width="20" className="search-bar-icon" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.search-bar {
  &-container {
    width: 320px;
    height: 40px;
    position: relative;
  }
  &-icon {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
  }
  padding-left: 10px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: $light;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
