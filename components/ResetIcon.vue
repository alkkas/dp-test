<script setup lang="ts">
import useNewsStore from '~/store/store'

const router = useRouter()
const news = useNewsStore()

const reset = () => {
  news.resetFilters()
  router.push('/')
}
</script>

<template>
  <button class="reset-icon-container" @click="reset">
    <Icon svgName="reset" :width="20" />
  </button>
</template>

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
