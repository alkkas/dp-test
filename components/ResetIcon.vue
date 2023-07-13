<template>
  <button class="reset-icon-container">
    <Icon svgName="reset" :width="20" />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.reset-icon-container {
  cursor: pointer;
  padding: 11px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  background-color: unset;
  border: none;
  border-radius: 100px;
  transition: transform 0.2s ease;
  &:hover {
    transform: translate(-3px, -3px);
  }
  &:active {
    transform: translate(0, 0);
  }
}
</style>
