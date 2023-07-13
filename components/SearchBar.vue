<script setup lang="ts">
import useNewsStore from '~/store/store'
import { debounce } from '~/utils/debounce'

const router = useRouter()
const route = useRoute()
const news = useNewsStore()

const changeSearchParam = debounce((query: string) => {
  router.push({ path: '/', query: { ...route.query, searchQuery: query } })
  news.page = 1
})

const changeValue = (newValue: string) => {
  news.filters.searchQuery = newValue
  changeSearchParam(newValue)
}
</script>

<template>
  <div class="search-bar-container">
    <input
      class="search-bar"
      :value="news.filters.searchQuery"
      @input="(e) => changeValue((e.target as HTMLButtonElement).value)"
    />
    <Icon svgName="search" :width="20" className="search-bar-icon" />
  </div>
</template>

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
