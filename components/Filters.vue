<script setup lang="ts">
import useNewsStore from '~/store/store'
const router = useRouter()
const route = useRoute()
const news = useNewsStore()

const changeFilter = (value: 'all' | '3dnews.ru' | 'habr.com') => {
  news.changeFilterSource(value)
  news.page = 1
  router.push({ path: '/', query: { ...route.query, source: value } })
}

const changeType = (value: 'small' | 'large') => {
  news.itemType = value
  news.perPage = value === 'small' ? 4 : 3
  localStorage.setItem('itemType', value)
}
</script>

<template>
  <div class="filters">
    <ul class="source-filter">
      <li>
        <button
          :class="{ 'filter-active': news.filters.source === 'all' }"
          @click="changeFilter('all')"
        >
          Все
        </button>
      </li>
      <li>
        <button
          :class="{ 'filter-active': news.filters.source === '3dnews.ru' }"
          @click="changeFilter('3dnews.ru')"
        >
          3dnews.ru
        </button>
      </li>
      <li>
        <button
          :class="{ 'filter-active': news.filters.source === 'habr.com' }"
          @click="changeFilter('habr.com')"
        >
          habr.com
        </button>
      </li>
    </ul>

    <ul class="item-appearance">
      <li>
        <button @click="changeType('large')">
          <img
            v-if="news.itemType === 'large'"
            src="/assets/imgs/large-item-blue.svg"
            :width="16"
            :height="20"
          />

          <div v-else>
            <img src="/assets/imgs/large-item.svg" :width="16" :height="20" />
          </div>
        </button>
      </li>
      <li>
        <button @click="changeType('small')">
          <img
            v-if="news.itemType === 'small'"
            src="/assets/imgs/small-item-blue.svg"
            :width="20"
            :height="20"
          />
          <div v-else>
            <img src="/assets/imgs/small-item.svg" :width="20" :height="20" />
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    color: $main;
    font-weight: 700;
  }
  .filter-active {
    color: $dark;
  }
}

.source-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}
.item-appearance {
  display: flex;
  align-items: center;
  gap: 9px;
}
</style>
