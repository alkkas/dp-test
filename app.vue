<script setup>
import useNewsStore from '~/store/store'

const route = useRoute()
const news = useNewsStore()

news.setFilters({
  source: route.query?.source || 'all',
  searchQuery: route.query?.searchQuery || '',
})

onMounted(() => {
  news.setLocalValues()
})
</script>

<template>
  <div class="container">
    <NuxtLayout name="header">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1060px;
  padding: 0 20px;
  margin: 36px auto;
}
</style>
